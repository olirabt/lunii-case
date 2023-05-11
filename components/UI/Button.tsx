import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ className = '', children, onClick, ...props }: ButtonProps) => {
	return (
		<button
			className={`bg-secondary500 text-neutral900 bold px-5 py-3 font-bold rounded ${className}`}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
