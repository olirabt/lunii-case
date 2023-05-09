import { useState, ChangeEvent } from 'react';
import Button from './Button';
import Input from './Input';
import FormAlert from './FormAlert';

interface FormValues {
	url: string;
}

const defaultFormValues: FormValues = {
	url: '',
};

const Form = () => {
	const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);
	const [urlError, setUrlError] = useState<boolean>(false);
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		// Check if URL is valid
		isValidUrl(formValues.url) ? setUrlError(false) : setUrlError(true)

		setFormSubmitted(true);

		// Do something with the form values
		console.log(formValues);
	};

	const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormSubmitted(false);
		setFormValues((prev) => ({ ...prev, url: event.target.value }));
		setUrlError(false);
	};

	const isValidUrl = (url: string): boolean => {
		try {
			new URL(url);
			return true;
		} catch (error) {
			return false;
		}
	};

	return (
		<div className="flex flex-col space-y-12">
			<form className="w-auto flex items-center justify-between gap-x-4">
				<Input
					className="w-3/4"
					value={formValues.url}
					onChange={handleUrlChange}
				/>
				<Button className="w-1/4" onClick={handleSubmit}>Submit</Button>
			</form>
			<hr className="border-0 m-0 p-0 w-full h-[2px] bg-primary400 opacity-60 shadow-md"/>
			{formSubmitted && (
				<FormAlert type={urlError ? "warning" : "success"}/>
			)}
		</div>
	);
};

export default Form;
