import Image from 'next/image'
import './logo.scss'
import React from 'react'
import clsx from 'clsx'

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
	lightSrc?: string
	darkSrc?: string
	compactLightSrc?: string
	compactDarkSrc?: string
}

export const Logo: React.FC<LogoProps> = ({
	className,
	lightSrc = '/logo-light.svg',
	darkSrc = '/logo-dark.svg',
	compactLightSrc = '/logo-compact-light.svg',
	compactDarkSrc = '/logo-compact-dark.svg',
	...props
}) => {
	return (
		<div
			className={clsx('logo', className)}
			{...props}
		>
			<Image
				className="logo__image logo__image--light logo__image--full"
				src={lightSrc}
				alt="alt"
				width={100}
				height={40}
			/>

			<Image
				className="logo__image logo__image--dark logo__image--full"
				src={darkSrc}
				alt="alt"
				width={100}
				height={40}
			/>

			<Image
				className="logo__image logo__image--light logo__image--compact"
				src={compactLightSrc}
				alt="alt"
				width={100}
				height={40}
			/>

			<Image
				className="logo__image logo__image--dark logo__image--compact"
				src={compactDarkSrc}
				alt="alt"
				width={100}
				height={40}
			/>
		</div>
	)
}
