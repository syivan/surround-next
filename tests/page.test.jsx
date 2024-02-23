import Page from "@/app/about/page";
import RootLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";

describe("Root Layout containing NavHeader, NavFooter", () => {
  it("NavFooter should display with necessary content", () => {
    const year = new Date().getFullYear();
    render(RootLayout(<div>dummy</div>));
    expect(screen.getByTestId("copyright")).toHaveTextContent(
      `Copyright © ${year}. All Rights Reserved.`
    );
  });
  it("Clicking About Link at NavFoot should redirect to About page", () => {
    render(RootLayout(<div>dummy</div>));
    const aboutButton = screen.getByTestId("link-about");
    expect(screen.getByTestId("link-about")).toHaveAttribute("href", "/about");
    fireEvent.click(aboutButton);
  });
});

it("About Page contains declaration", () => {
  render(<Page />);
  expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
    "The Custom Background Mixer For You"
  );
});
