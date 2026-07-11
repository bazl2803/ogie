'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '../../atoms/input/input'
import './command-box.scss'
import { LiaSearchSolid } from 'react-icons/lia'

export interface CommandBoxItem {
	id: string
	label: string
	description?: string
	icon?: React.ReactNode
	onSelect?: () => void
}

export interface CommandBoxProps {
	placeholder?: string
	items?: CommandBoxItem[]
	onSearch?: (query: string) => void
	className?: string
}

export function CommandBox({
	placeholder = 'Type a command or search...',
	items = [],
	onSearch,
	className = '',
}: CommandBoxProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [query, setQuery] = useState('')
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleFocus = () => setIsOpen(true)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value)
		setIsOpen(true)
		onSearch?.(e.target.value)
	}

	const filteredItems = items.filter(
		(item) =>
			item.label.toLowerCase().includes(query.toLowerCase()) ||
			item.description?.toLowerCase().includes(query.toLowerCase()),
	)

	return (
		<motion.div
			className={`command-box ${isOpen ? 'command-box--open' : ''} ${className}`}
			ref={containerRef}
			layout
			transition={{ duration: 0.2, ease: 'easeInOut' }}
		>
			<div className="command-box__input-wrapper">
				<Input>
					<Input.Addon>
						<LiaSearchSolid />
					</Input.Addon>
					<Input.Field
						placeholder={placeholder}
						value={query}
						onChange={handleChange}
						onFocus={handleFocus}
					/>
				</Input>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="command-box__dropdown"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2, ease: 'easeInOut' }}
					>
						<div className="command-box__dropdown-content">
							{filteredItems.length > 0 ? (
								<ul className="command-box__list">
									{filteredItems.map((item) => (
										<motion.li
											key={item.id}
											className="command-box__item"
											onClick={() => {
												item.onSelect?.()
												setIsOpen(false)
												setQuery('')
											}}
											whileHover={{ scale: 0.98 }}
											whileTap={{ scale: 0.95 }}
										>
											{item.icon && (
												<span className="command-box__item-icon">
													{item.icon}
												</span>
											)}
											<div className="command-box__item-text">
												<span className="command-box__item-label">
													{item.label}
												</span>
												{item.description && (
													<span className="command-box__item-desc">
														{item.description}
													</span>
												)}
											</div>
										</motion.li>
									))}
								</ul>
							) : (
								<div className="command-box__empty">No results found.</div>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
