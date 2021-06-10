import React from "react";
import renderer from "react-test-renderer";
import Button from ".";

it("<Button /> renders correctly", () => {
  const tree = renderer.create(<Button>Button Test</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
