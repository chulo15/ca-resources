import { overview, resources } from '@/data/links';
import { getAllMdx } from '@/lib/mdx';
import Link from 'next/link';
import { MDXFrontMatter } from '@/lib/types';
import { useMemo } from 'react';

interface PathsProp {
	paths: MDXFrontMatter[];
}

function Aside() {
	const mdxFiles = useMemo(() => getAllMdx().map((post) => post['frontMatter']), []);

	return (
		<aside className='hidden xl:flex flex-col w-[16.25rem] border border-t-0 primary-border'>
			<div className='sticky top-[4.25rem] pt-8 px-6'>
				<div className='mb-4'>
					<p className='text-100 text-sm font-medium'>Overview</p>
					<ul className='links'>
						{overview.map((o, i) => (
							<li key={i}>
								<Link
									href={o.path}
									scroll={false}
								>
									{o.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='mb-4'>
					<p className='text-100 text-sm font-medium'>Resources</p>
					<ul className='links'>
						{resources.map((r, i) => (
							<li key={i}>
								<Link
									href={r.path}
									scroll={false}
								>
									{r.text}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className='mb-4'>
					<p className='text-100 text-sm font-medium'>Components</p>
					<ul className='links'>
						<ComponentPaths paths={mdxFiles} />
					</ul>
				</div>
			</div>
		</aside>
	);
}

export default Aside;

function ComponentPaths({ paths }: PathsProp) {
	return (
		<>
			{paths.map((p, i) => (
				<li key={i}>
					<Link
						href={`/components/${p.slug}`}
						scroll={false}
					>
						{p.title}
					</Link>
				</li>
			))}
		</>
	);
}
