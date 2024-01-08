/**
 * Props
 */
type ButtonProps = {
	ref?: React.RefObject<HTMLButtonElement>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * Represents a standard button element with various props for customization.
 */
export const Button = ({ref, ...props}: ButtonProps) => {
	return <button {...props} />
}
