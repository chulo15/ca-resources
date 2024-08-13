import './globals.css';
import type { Metadata } from 'next';
import { geistsans } from '@/lib/font';
import Providers from '@/components/shared/theme-provider';
import Header from '@/components/shared/header';
import Aside from '@/components/shared/aside';

export const metadata: Metadata = {
	title: 'Ced Resources',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={geistsans.className}>
				<Providers>
					<Header />
					<div className='h-16 xl:hidden'></div>
					<main className='flex max-w-[76.25rem] flex-col xl:mx-auto xl:mt-0 xl:grid xl:grid-cols-[16.25rem_1fr]'>
						<Aside />
						<div className='border border-t-0 border-l-0 primary-border h-dvh'>{children}</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
