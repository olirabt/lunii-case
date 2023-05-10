import cn from "classnames";
import Link from "next/link"

interface FormAlertProps {
	type: "success" | "warning";
	originalUrl: string;
	shortUrl: string;
	error: string | null;
}

const FormAlert: React.FC<FormAlertProps> = ({ type, originalUrl = "", shortUrl = "", error = "" }) => {

	const alertClass = cn({
		"bg-validate500 text-validate400": type === "success",
		"bg-alert400 text-alert500": type === "warning",
	});

	const RedirectLink = <Link href={originalUrl}>{shortUrl}</Link>;

	return (
		<div className={cn("text-left w-full px-5 py-3 mx-auto rounded-md", alertClass)}>
			{type === "success" && <p>Voici le lien raccourci : {RedirectLink}</p>}
			{type === "warning" && <p>{error}</p>}
		</div>
	);
};

export default FormAlert;