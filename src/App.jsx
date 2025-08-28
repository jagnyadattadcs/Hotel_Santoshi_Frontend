import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import SpecialRecipes from './components/SpecialRecipes'
import OurService from './components/OurService'
import OurMenu from './components/OurMenu'
import OurTeam from './components/OurTeam'
import WeekDish from './components/WeekDish'
import CustomerFeedbacks from './components/CustomerFeedbacks'
import FeedBackForm from './components/FeedBackForm'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Home/>
      <About/>
      <SpecialRecipes/>
      <OurService/>
      <OurMenu/>
      <OurTeam/>
      <WeekDish/>
      <CustomerFeedbacks/>
      <FeedBackForm/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
