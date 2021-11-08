import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import { Flex } from '@chakra-ui/react';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			<Flex padding="10px" minHeight="87vh">
				{children}
			</Flex>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Next Amazona',
	description: 'modern clothing',
	keywords: 'shirts, trousers, pants',
};
