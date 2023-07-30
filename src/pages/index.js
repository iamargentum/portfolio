import * as React from "react";
import { Main } from "../components/Main";
import { Work } from "../components/Work";

export default function Home() {
  return (
    <>
      <Main />
      <Work />
    </>
  )
}

export const Head = () => <title>Home Page</title>
