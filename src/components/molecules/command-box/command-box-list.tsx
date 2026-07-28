'use client'

import { Command } from 'cmdk'
import { useCommandBoxContext } from './command-box-context'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

interface CommandBoxListProps extends React.ComponentProps<
	typeof Command.List
> {}

export const CommandBoxList: React.FC<CommandBoxListProps> = ({
	ref,
	className,
	...props
}) => {
	const { isOpen } = useCommandBoxContext()
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					className="command-box-list-anchor"
					transition={{
						duration: 0.3,
						ease: 'easeInOut',
					}}
				>
					<Command.List
						{...props}
						className={clsx('command-box-list', className)}
						ref={ref}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
