import React, { FC, MouseEventHandler } from 'react';

interface ButtonProps {
	text: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<button className="w-full bg-[#DFA878] font-semibold hover:bg-[#BA704F] text-[#6C3428] py-2 px-4 mt-4 rounded" onClick={onClick}>
			{text}
		</button>
	);
}

export default Button;