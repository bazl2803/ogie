import { Command } from 'cmdk'
import React, { ComponentPropsWithoutRef } from 'react'
import { CommandBoxContext } from './command-box-context'
import { CommandBoxInputWrapper } from './command-box-input-wrapper'
import { CommandBoxInput } from './command-box-input'
import { CommandBoxList } from './command-box-list'
import { CommandBoxOption } from './command-box-option'
import './command-box.scss'
import clsx from 'clsx'
import { CommandBoxGroup } from './command-box-group'

interface CommandBoxProps extends ComponentPropsWithoutRef<typeof Command> {
	loop?: boolean
	label?: string
	children: React.ReactNode
	className?: string
}

const CommandBoxRoot: React.FC<CommandBoxProps> = ({
	loop = true,
	label,
	children,
	className,
	...props
}) => {
	const [isOpen, setIsOpen] = React.useState(false)
	const containerRef = React.useRef<HTMLDivElement | null>(null)

	React.useEffect(() => {
		function handlePointerDown(event: PointerEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('pointerdown', handlePointerDown)
		return () => document.removeEventListener('pointerdown', handlePointerDown)
	}, [])

	return (
		<CommandBoxContext.Provider
			value={{
				loop,
				isOpen,
				setIsOpen,
				containerRef,
			}}
		>
			<div
				className={clsx('command-box-root', className)}
				data-commandbox-root
			>
				<Command
					{...props}
					loop={loop}
					label={label}
					className="command-box"
					{...props}
				>
					{children}
				</Command>
			</div>
		</CommandBoxContext.Provider>
	)
}

export const CommandBox = Object.assign(CommandBoxRoot, {
	InputWrapper: CommandBoxInputWrapper,
	Input: CommandBoxInput,
	List: CommandBoxList,
	Option: CommandBoxOption,
	Group: CommandBoxGroup,
})
