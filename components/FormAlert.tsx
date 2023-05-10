import { useEffect, useState } from "react";
import cn from "classnames";
import Link from "next/link"

interface FormAlertProps {
	type: "success" | "warning";
	originalUrl: string;
	shortUrl: string;
}

const FormAlert: React.FC<FormAlertProps> = ({ type, originalUrl = "", shortUrl = "" }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (type) {
			setShow(true);
		}
	}, [type]);

	const alertClass = cn({
		"bg-validate500 text-validate400": type === "success",
		"bg-alert400 text-alert500": type === "warning",
	});

	const RedirectLink = <Link href={originalUrl}>{shortUrl}</Link>;

	return (
		<div className={cn("text-left w-full px-5 py-3 mx-auto rounded-md", alertClass)}>
			{type === "success" && <p>Voici le lien raccourci : {RedirectLink}</p>}
			{type === "warning" && <p>L’url saisie est invalide.</p>}
		</div>
	);
};

export default FormAlert;