import { HTMLProps } from 'react';

interface InputProps extends HTMLProps<HTMLInputElement> {
	className?: string;
	label?: string;
}

const Input = ({ className = '', label, ...props }: InputProps) => (
	<div className={`${className}`}>
		{label && <label className="block mb-2">{label}</label>}
		<input
			className="px-5 py-3 rounded h-full w-full"
			{...props}
		/>
	</div>
);

export default Input;
