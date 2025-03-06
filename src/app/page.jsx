import Header from "./Components/Header"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import CategoryList from "./Components/Category"
//import Section00 from "./Components/Section00"
import Section from "./Components/Section"
import Footer from "./Components/Footer"


export default function Home() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Hero/>
      <CategoryList/> 
      <Section/>
      <Footer/>
    </div>
  )
}