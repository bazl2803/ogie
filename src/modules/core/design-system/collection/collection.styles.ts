import { sva } from '@styled-system/css';

export const CollectionStyles = sva({
	className: 'Collection',
	slots: ['root', 'header', 'content'],
	base: {
		root: {},
		header: {},
		content: {},
	},
});
