import { render } from "@testing-library/react"
import FormAlert from "@/components/FormAlert";

describe("FormAlert", () => {
	it("renders without crashing", () => {
		render(<FormAlert type="success" originalUrl="https://google.com" shortUrl="https://shorturl.com" error={null} />);
	});

	it("renders the success message correctly", () => {
		const { getByText } = render(<FormAlert type="success" originalUrl="http://google.com/somelongparameter" shortUrl="https://shorturl.com" error={null} />);
		expect(getByText("Voici le lien raccourci :")).toBeInTheDocument();
	});

	it("renders the link with the correct href attribute", () => {
		const { getByRole } = render(<FormAlert type="success" originalUrl="http://google.com/somelongparameter" shortUrl="https://shorturl.com" error={null} />);
		expect(getByRole("link")).toHaveAttribute("href", "http://google.com/somelongparameter");
	});

	it("renders the warning message correctly", () => {
		const { getByText } = render(<FormAlert type="warning" originalUrl="google" shortUrl="" error="L’url saisie est invalide" />);
		expect(getByText("L’url saisie est invalide")).toBeInTheDocument();
	});
});