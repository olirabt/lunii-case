import { render } from '@testing-library/react'
import FormAlert from "@/components/FormAlert";

describe("FormAlert", () => {
  it("renders the success message correctly", () => {
    const { container } = render(<FormAlert type="success" originalUrl="http://google.com/somelongparameter" shortUrl="https://shorturl.com" error={null} />)
    expect(container).toMatchSnapshot()
  });

  it("renders the warning message correctly", () => {
    const { container } = render(<FormAlert type="warning" originalUrl="google" shortUrl="" error="L’url saisie est invalide" />)
    expect(container).toMatchSnapshot()
  });
});