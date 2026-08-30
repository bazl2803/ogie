'use client'
import { Sidebar } from '@/components'

export const BackofficeSidebar = () => {
	return (
		<Sidebar>
			<Sidebar.Header></Sidebar.Header>
			<Sidebar.Content>
				<Sidebar.Group title="Principal"></Sidebar.Group>
				<Sidebar.Group title="Invetario"></Sidebar.Group>
				<Sidebar.Group title="Usuarios"></Sidebar.Group>
			</Sidebar.Content>
			<Sidebar.Footer></Sidebar.Footer>
		</Sidebar>
	)
}
