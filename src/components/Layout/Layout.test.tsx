import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";
import Layout from ".";

it("<Layout /> renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Layout>Layout Test</Layout>
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
