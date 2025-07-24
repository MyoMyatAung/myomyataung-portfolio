import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Myo Myat Aung - Mobile Full-Stack Developer',
	// My long description for mobile full-stack developer
	description:
		'Welcome to my portfolio! I am a mobile full-stack developer with a passion for creating seamless user experiences and robust backend systems. Explore my portfolio to see my work in action.',
	keywords: [
		'Backend Developer',
		'Software Engineer',
		'System Architecture',
		'API Development',
		'Database Design',
		'Cloud Computing',
		'Microservices',
		'DevOps',
		'[Your Name]',
		'Node.js',
		'Python',
		'Java',
		'Distributed Systems',
		'System Design',
		'Backend Architecture',
	],
	authors: [{ name: 'Myo Myat Aung' }],
	creator: 'Myo Myat Aung',
	openGraph: {
		title: 'Myo Myat Aung - Mobile Full-Stack Developer Portfolio',
		// My short bio for mobile full-stack developer
		description: 'I am a mobile full-stack developer with a passion for creating seamless user experiences and robust backend systems. Explore my portfolio to see my work in action.',
		url: 'https://myomyataung-portfolio.vercel.app/',
		siteName: 'Myo Myat Aung - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Backend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
