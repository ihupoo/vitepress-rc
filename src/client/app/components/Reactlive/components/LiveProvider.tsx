import React, { useEffect, useRef, useState } from 'react'
import LiveContext from './LiveContext'
import { renderElementAsync } from '../transpile'

const fakeHost = `https://a.com`

export interface ILiveProvider {
	code: string
	disabled: boolean
	scope: {
		[key: string]: any
	}
	transformCode: (code: string) => string
	children: React.ReactNode
}

export default function LiveProvider({ code: prevCode, disabled, scope, transformCode, children }: ILiveProvider) {
	const [error, setError] = useState<string | null>('')
	const shadowRoot = useRef<ShadowRoot | null>(null)

	const onChange = (editCode: string) => {
		transpile({ code: editCode, scope, transformCode })
	}

	const transpile = ({ code, scope, transformCode }: Pick<ILiveProvider, 'code' | 'scope' | 'transformCode'>) => {
		const input = {
			code: transformCode(code),
			scope,
		}
		const errorCallback = (err: Error) => {
			setError(err.toString())
			const url = new URL('//jspm.dev/react-dom', fakeHost).href
			import(/* @vite-ignore */ url).then(({ default: ReactDomFetch }) => {
				ReactDomFetch.unmountComponentAtNode(shadowRoot.current)
			})
		}
		const renderElement = () => {
			setError(null)
		}

		try {
			renderElementAsync(input, renderElement, errorCallback, shadowRoot)
		} catch (error) {
			errorCallback(error)
		}
	}

	useEffect(() => {
		transpile({ code: prevCode, scope, transformCode })
	}, [prevCode, scope, transformCode])

	return (
		<LiveContext.Provider
			value={{
				code: prevCode,
				disabled,
				shadowRoot,
				error,
				onChange,
			}}
		>
			{children}
		</LiveContext.Provider>
	)
}

LiveProvider.defaultProps = {
	disabled: false,
	scope: {},
	transformCode: (code: string) => code,
}
