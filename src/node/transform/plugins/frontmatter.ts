import visit from 'unist-util-visit'
import type { IPluginTransformer, VFileData } from '../index'
import type { YAML } from 'mdast'

interface PluginProps {
	id: string
}

export default function plugin({ id }: PluginProps): IPluginTransformer {
	return (tree, vfile) => {
		visit(tree, 'yaml', function visitor(node: YAML) {
			if (node.data && node.data.parsedValue) {
				vfile.data.frontmatter = node.data.parsedValue as VFileData['frontmatter']
			}
		})
	}
}
