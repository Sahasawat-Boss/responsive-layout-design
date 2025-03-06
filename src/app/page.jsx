import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import CategoryList from "./Components/Category"
import Section from "./Components/Section"


export default function Home() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Main/>
      <CategoryList/>
      <Section/>
    </div>
  )
}