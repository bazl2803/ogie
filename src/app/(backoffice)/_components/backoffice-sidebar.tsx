'use client'

import { Logo, Sidebar } from '@/components'
import {
	TbBook,
	TbBoxMultiple2,
	TbDashboard,
	TbPackages,
	TbUserCheck,
	TbUsers,
	TbUsersGroup,
} from 'react-icons/tb'

export const BackofficeSidebar = () => {
	return (
		<Sidebar
			className="backoffice-sidebar"
			style={{ gridArea: 'sidebar' }}
		>
			<Sidebar.Header>
				<Logo />
			</Sidebar.Header>
			<Sidebar.Content>
				<Sidebar.Group title="Principal">
					<Sidebar.Item
						icon={<TbDashboard />}
						label="Actividades"
					/>
				</Sidebar.Group>
				<Sidebar.Group title="Productos">
					<Sidebar.Item
						icon={<TbPackages />}
						label="Inventario"
					/>
					<Sidebar.Item
						icon={<TbBook />}
						label="Catálogo"
					/>
				</Sidebar.Group>
				<Sidebar.Group title="Usuarios">
					<Sidebar.Item
						icon={<TbUsers />}
						label="Clientes"
					/>
					<Sidebar.Item
						icon={<TbUserCheck />}
						label="Proveedores"
					/>
					<Sidebar.Item
						icon={<TbUsersGroup />}
						label="Empleados"
					/>
				</Sidebar.Group>
				<Sidebar.Group title="Reportes">
					<Sidebar.Item
						icon={<TbBoxMultiple2 />}
						label="Reportes"
					/>
				</Sidebar.Group>
			</Sidebar.Content>
		</Sidebar>
	)
}
