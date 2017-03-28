import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import Button from "./Button";
import Welcome from "./Welcome";

storiesOf( "Welcome", module )
  .add( "to Storybook", () => (
      <Welcome showApp={ linkTo( "Button" ) } />
  ) );

const poop = () => {
    console.log( "I 💩 a lot!" );
};

storiesOf( "Button", module )
  .add( "with text", () => (
      <Button onClick={ action( "clicked" ) }>Hello Button</Button>
  ) )
  .add( "with some emoji", () => (
      <Button onClick={ action( "clicked" ) }>😀 😎 👍 💯</Button>
  ) )
  .add( "with some 💩 emoji", () => (
      <Button onClick={ poop() }>💩 💩 💩 💩</Button>
  ) );
