import { render, screen } from "@testing-library/react";

import Constant from "../Constant/Constant";
import GeneralText from "./GeneralText.component";

const { TYPE, COLOR } = Constant;

describe("GeneralText", () => {
  it("renders default TEXT type when no type provided", () => {
    render(<GeneralText text="Default Text" />);

    const element = screen.getByText("Default Text");
    expect(element.tagName).toBe("P");
  });

  it("renders PRIMARY as h1", () => {
    render(
      <GeneralText
        type={TYPE.PRIMARY}
        text="Primary Text"
      />,
    );

    const element = screen.getByText("Primary Text");
    expect(element.tagName).toBe("H1");
  });

  it("renders SECONDARY as h2", () => {
    render(
      <GeneralText
        type={TYPE.SECONDARY}
        text="Secondary Text"
      />,
    );

    const element = screen.getByText("Secondary Text");
    expect(element.tagName).toBe("H2");
  });

  it("renders CUSTOM_TEXT as span", () => {
    render(
      <GeneralText
        type={TYPE.CUSTOM_TEXT}
        text="Custom Text"
      />,
    );

    const element = screen.getByText("Custom Text");
    expect(element.tagName).toBe("SPAN");
  });

  it("renders DETAIL_TEXT as p", () => {
    render(
      <GeneralText
        type={TYPE.DETAIL_TEXT}
        text="Detail Text"
      />,
    );

    const element = screen.getByText("Detail Text");
    expect(element.tagName).toBe("P");
  });

  it("applies custom color style", () => {
    render(
      <GeneralText
        type={TYPE.PRIMARY}
        text="Colored Text"
        color={COLOR.YELLOW}
      />,
    );

    const element = screen.getByText("Colored Text");
    console.log(element);
    expect(element).toHaveStyle({
      color: COLOR.YELLOW,
    });
  });

  it("matches snapshot for PRIMARY", () => {
    const { container } = render(
      <GeneralText
        type={TYPE.PRIMARY}
        text="Snapshot Primary"
        color={COLOR.BLUE}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
