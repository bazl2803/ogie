import Image from 'next/image'
import './logo.scss'

export function Logo() {
	return (
		<>
			<Image
				className="logo logo--light"
				src="/logo-light.svg"
				alt="Logo"
				width={100}
				height={100}
			/>

			<Image
				className="logo logo--dark"
				src="/logo-dark.svg"
				alt="Logo"
				width={100}
				height={100}
			/>
		</>
	)
}
