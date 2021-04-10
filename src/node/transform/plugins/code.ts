import { IPluginTransformer, VFileData } from '../index'
import visit from 'unist-util-visit'

interface PluginProps {
	id: string
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'code', function visitor(node) {})
	}
}
