import React from 'react';

interface PopoverTriggerProps {
	children?: React.ReactNode;
}

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
	return <div>{children}</div>;
};
