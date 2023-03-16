import Navbar from "../components/navbar"
import Section from "../components/section"
import Cards from "../components/cards"
import Footer from "../components/footer"
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
      <Section/>
      <Cards/>
      <Footer/>
    </>
  )
}
