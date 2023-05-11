import { render } from '@testing-library/react'
import Alert from "@/components/UI/Alert";

describe("Alert", () => {
  it("renders the success message correctly", () => {
    const { container } = render(<Alert type="success"><p>Success message</p></Alert>)
    expect(container).toMatchSnapshot();
  });

  it("renders the warning message correctly", () => {
    const { container } = render(<Alert type="warning"><p>L&apos;url saisie est invalide</p></Alert>)
    expect(container).toMatchSnapshot();
  });
});
