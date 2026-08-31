import { BackofficeSidebar } from "./backoffice-sidebar"
import './backoffice-shell.scss'

interface BackofficeShellProps {
	children: React.ReactNode
}

export const BackofficeShell: React.FC<BackofficeShellProps> = ({children}) => {
	return (
		<div className="backoffice-shell">
			<BackofficeSidebar/>
			<main>{children}</main>
		</div>
	)
}
