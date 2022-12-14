import * as React from "react"
import { Link, HeadFC } from "gatsby"
import Layout from "../components/Layout";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
   <Layout>
     <h1>Вибачте</h1>
        <p>Такої сторінки не знайдено</p>
        <p>
            <Link to="/">Go home</Link>.
        </p>
   </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
