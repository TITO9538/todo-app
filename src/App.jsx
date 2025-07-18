import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

export default function App() {
  return (
    <div className='bg-[#fafafaff] dark:bg-[#161722ff] transition-all duration-300'>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
    </div>
  )
}
