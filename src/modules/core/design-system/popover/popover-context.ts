import React from 'react';

export const PopoverContext = React.createContext<{
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
	open: false,
	setOpen: () => {},
});
