import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import CategoryList from "./Components/Category"
import Section from "./Components/Section"
import SectionTest from "./Components/SectionTest"
import Footer from "./Components/Footer"


export default function Home() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Hero/>
      <CategoryList/>
      <Section/>
      <SectionTest/>
      <Footer/>
    </div>
  )
}