import React from "react";
import cn from "classnames";

interface AlertProps {
	type: "success" | "warning";
	children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, children }) => {

	const alertClass = {
		"bg-validate500 text-validate400": type === "success",
		"bg-alert400 text-alert500": type === "warning",
	};

	return (
		<div className={cn("text-left", "w-full", "px-5", "py-3", "mx-auto", "rounded-md", alertClass)}>
			{children}
		</div>
	);
};

export default Alert;