import React from 'react'
import Hero from './Hero'
import How from './How'
import Soon from './Soon'
import Contact from './Contact'

function Main() {
  return (
    <div className='bg-black'>
        <Hero/>
        <How/>
        <Soon/>
        <Contact/>
    </div>
  )
}

export default Main