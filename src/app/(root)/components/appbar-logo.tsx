import Image from 'next/image';

export const AppbarLogo: React.FC = () => {
	return (
		<Image
			src="/sumi_logo.jpg"
			alt="logo"
			width={100}
			height={40}
		/>
	);
};
