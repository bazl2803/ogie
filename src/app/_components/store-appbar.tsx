'use client'
import { Button, Container, Logo, Toolbar } from '@/components'
import { LiaShoppingCartSolid, LiaUserAltSolid } from 'react-icons/lia'
import { StoreAppBarSearch } from './store-appbar-search'
import './store-appbar.scss'

export function StoreAppBar() {
	return (
		<div className='store-appbar'>
			<Container className='store-appbar-container'>
				<div className='store-appbar-background' />
				<Toolbar className='store-appbar-toolbar'>
					<Toolbar.Row>
						<Toolbar.Group>
							<Logo />
						</Toolbar.Group>
						<Toolbar.Group>
							<StoreAppBarSearch />
						</Toolbar.Group>
						<Toolbar.Group>
							<Button size={'icon-md'}>
								<LiaUserAltSolid />
							</Button>
							<Button size={'icon-md'}>
								<LiaShoppingCartSolid />
							</Button>
						</Toolbar.Group>
					</Toolbar.Row>
				</Toolbar>
			</Container>
		</div>
	)
}
