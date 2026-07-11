import './input.scss'

export function Input({
	children,
	...props
}: React.ComponentPropsWithRef<'div'>) {
	return (
		<div
			className="input"
			{...props}
		>
			{children}
		</div>
	)
}

function InputField({
	children,
	...props
}: React.ComponentPropsWithRef<'input'>) {
	return (
		<input
			className="input__field"
			type="text"
			{...props}
		/>
	)
}

function InputAddon({
	children,
	...props
}: React.ComponentPropsWithRef<'div'>) {
	return (
		<div
			className="input__addon"
			{...props}
		>
			{children}
		</div>
	)
}

Input.Field = InputField
Input.Addon = InputAddon
