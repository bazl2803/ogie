import { ListboxItem } from './listbox-item';

interface ListboxProps extends React.HTMLAttributes<HTMLUListElement> {
	items:
		| React.ReactElement<typeof ListboxItem>[]
		| React.ReactElement<typeof ListboxItem>;
}

export function Listbox(props: ListboxProps) {
	return <ul {...props} />;
}
