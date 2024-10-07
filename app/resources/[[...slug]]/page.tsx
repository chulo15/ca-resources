import type { Metadata } from "next"

import { resources } from "@/app/source"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { components } from "@/components/shared/mdx-components"

import { TableOfContents } from "fumadocs-core/server"

export default function Page({ params }: { params: { slug?: string[] } }) {
	const page = resources.getPage(params.slug)
	if (!page) notFound()

	const toc: TableOfContents = page.data.toc.map((item: any) => ({
		title: item.title || item,
		url: item.url || `/guides/${item.slug}`,
		depth: item.depth || 1,
	}))

	return (
		<DocsPage
			tableOfContent={{
				style: "clerk",
				single: false,
			}}
			toc={toc}
			editOnGithub={{
				repo: "ca-resources",
				owner: "bryan308",
				sha: "v2/stable",
				path: `content/resources/${page.file.flattenedPath}.mdx`,
			}}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDXContent
					code={page.data.body}
					components={components}
				/>
			</DocsBody>
		</DocsPage>
	)
}

export function generateStaticParams() {
	return resources.generateParams()
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
	const page = resources.getPage(params.slug)
	if (!page) notFound()

	return {
		title: page.data.title,
		description: page.data.description,
	} satisfies Metadata
}
