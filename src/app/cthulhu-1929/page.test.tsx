import { render, screen } from "@testing-library/react";
import { Provider } from "@/components/ui/provider";
import Cthulhu1929SplashPage from "./page";

describe("Cthulhu1929SplashPage", () => {
  it("uses matching bullet list styling for both splash-page lists", () => {
    // Arrange
    render(
      <Provider>
        <Cthulhu1929SplashPage />
      </Provider>,
    );

    // Act
    const eveningHeading = screen.getByText("Your Evening Includes:");
    const firstList = screen
      .getByText(/Inhabit a character and step into a world/i)
      .closest("ul");
    const secondList = eveningHeading.nextElementSibling?.querySelector("ul");

    // Assert
    expect(firstList).toHaveClass(
      "list-disc",
      "pl-8",
      "text-[#b6d7a8]",
      "marker:text-[#fff2cc]",
    );
    expect(secondList).toHaveClass(
      "list-disc",
      "pl-8",
      "text-[#b6d7a8]",
      "marker:text-[#fff2cc]",
    );
  });
});
