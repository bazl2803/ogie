/**
 * @jest-environment jsdom
 */

import {fireEvent, render} from '@testing-library/react'
import {Button} from './Button'

describe('Button', () => {
	it('should be render', () => {
		const {getByText} = render(<Button>Click Me!</Button>)
		const buttonElement = getByText('Click Me!')
		expect(buttonElement).toBeInTheDocument()
	})

	it('should be clicked', () => {
		const mockFn = jest.fn()

		const {getByText} = render(
			<Button onClick={mockFn}>Click Me!</Button>
		)

		fireEvent.click(getByText('Click Me!'))
		expect(mockFn).toHaveBeenCalledTimes(1)
	})
})
