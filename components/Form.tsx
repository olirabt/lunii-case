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

interface ShortUrlResponse {
	originalUrl: string;
	shortUrl: string;
}

const Form = () => {
	const [formValues, setFormValues] = useState<FormValues>(defaultFormValues);
	const [error, setError] = useState<string | null>(null);
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
	const [shortUrlResponse, setShortUrlResponse] = useState<ShortUrlResponse>({ originalUrl: '', shortUrl: '' });

	const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();

		//frontend validation of the url provided in the form
		if (!isValidUrl(formValues.url)) {
			setError("L’url saisie est invalide");
			setFormSubmitted(true);
			return;
		}

		//send the url to shorten to the backend service
		try {
			const response = await fetch('/api/shorturl', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ url: formValues.url }),
			})

			if (!response.ok) {
				const errorResponse = await response.json();
				setError(errorResponse.error);
			} else {
				const shortUrlResponse = await response.json();
				setShortUrlResponse(shortUrlResponse);
			}

		} catch (error) {
			setError("An error occurred. Please try again later.");
		}

		setFormSubmitted(true);
	};

	const handleUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormSubmitted(false);
		setShortUrlResponse({ originalUrl: "", shortUrl: "" });
		setFormValues((prev) => ({ ...prev, url: event.target.value }));
		setError("");
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
			<hr className="border-0 m-0 p-0 w-full h-[2px] bg-primary400 opacity-60 shadow-md" />
			{/* toggle alert when form is submitted */}
			{formSubmitted && (
				<FormAlert type={error ? "warning" : "success"} originalUrl={shortUrlResponse.originalUrl} shortUrl={shortUrlResponse.shortUrl} error={error} />
			)}
		</div>
	);
};

export default Form;
