'use client';
import React from 'react';

interface DrawerContextProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerContext = React.createContext<
	DrawerContextProps | undefined
>(undefined);

export const DrawerProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [open, setOpen] = React.useState(false);

	return (
		<DrawerContext.Provider value={{ open, setOpen }}>
			{children}
		</DrawerContext.Provider>
	);
};

export const useDrawerContext = () => {
	const context = React.useContext(DrawerContext);
	if (!context) {
		throw new Error(
			'useDrawerContext must be used within a DrawerProvider'
		);
	}
	return context;
};
