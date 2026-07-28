import { CommandBox, InputGroup, Kbd } from '@/components'
import Image from 'next/image'
import './store-appbar.scss'
import { LiaSearchSolid } from 'react-icons/lia'
import { motion } from 'framer-motion'

export const StoreAppBarSearch = () => {
	return (
		<CommandBox>
			<CommandBox.InputWrapper>
				<InputGroup.Addon>
					<LiaSearchSolid />
				</InputGroup.Addon>
				<CommandBox.Input placeholder="Search" />
				<InputGroup.Addon>
					<Kbd>Ctrl + K</Kbd>
				</InputGroup.Addon>
			</CommandBox.InputWrapper>
			<CommandBox.List>
				<CommandBox.Group heading="Productos">
					<CommandBox.Option value="item-1">
						<StoreAppBarSearchItem
							image="/421429.jpg"
							title="Lámpara colgante 3l - gu10 770 LIGHTS"
							price={94.95}
						/>
					</CommandBox.Option>
					<CommandBox.Option value="item-2">
						<StoreAppBarSearchItem
							image="/427951.jpg"
							title="Lámpara colgante de vidrio negro 1l - e27 IKE-LITE"
							price={29.95}
						/>
					</CommandBox.Option>
					<CommandBox.Option value="item-3">
						<StoreAppBarSearchItem
							image="/468504.jpg"
							title="Lámpara colgante blanco 1l e27 IKE-LITE"
							price={44.95}
						/>
					</CommandBox.Option>
				</CommandBox.Group>
			</CommandBox.List>
		</CommandBox>
	)
}

const StoreAppBarSearchItem: React.FC<{
	image: string
	title: string
	price: number
}> = ({ image, title, price, ...props }) => {
	return (
		<motion.div
			className={'store-appbar-search-item'}
			whileTap={{ scale: 0.98 }}
			{...props}
		>
			<Image
				src={image}
				alt={title}
				width={50}
				height={50}
				className={'store-appbar-search-item-image'}
			/>
			<div className={'store-appbar-search-item-content'}>
				<div className={'store-appbar-search-item-content-title'}>{title}</div>
				<div className={'store-appbar-search-item-content-price'}>
					{price &&
						price.toLocaleString('en-US', {
							style: 'currency',
							currency: 'USD',
						})}
				</div>
			</div>
		</motion.div>
	)
}
