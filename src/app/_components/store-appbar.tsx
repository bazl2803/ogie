'use client'
import { Button, CommandBox, Container, Logo, Toolbar } from '@/components'
import {
	LiaShoppingCartSolid,
	LiaUserSolid,
} from 'react-icons/lia'

export function StoreAppBar() {
	return (
		<Container>
			<Toolbar>
				<Toolbar.Row>
					<Toolbar.Group>
						<Logo />
					</Toolbar.Group>
					<Toolbar.Group>
						<CommandBox placeholder="Search" />
					</Toolbar.Group>
					<Toolbar.Group>
						<Button size="icon-md">
							<LiaUserSolid />
						</Button>
						<Button size="icon-md">
							<LiaShoppingCartSolid />
						</Button>
					</Toolbar.Group>
				</Toolbar.Row>
			</Toolbar>
		</Container>
	)
}
