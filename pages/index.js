import React from "react"
import Page1 from "./components/page1"
import { Fade } from "react-awesome-reveal"

export default function Home() {
 return(
  <><Fade duration={2000}>
  <Page1 />
  </Fade></>
 )
}
