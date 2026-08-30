import { ReactNode } from 'react'

interface BackofficeLayoutProps {
    children: ReactNode
}

export default function BackofficeLayout({
    children
}: BackofficeLayoutProps) {

	return (
		<div className='backofficeLayout'>
            <div></div>
			<div>{children}</div>
		</div>
	)
}
