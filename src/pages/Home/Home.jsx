import Links from '@/Component/Links/Links'
import { Title } from '@/Component/Welcome/Title'
import React from 'react'
import About from '../About/About'


const Home = () => {
  return (
    <div className='text-white'>
      <Title></Title>
      <div>
        <Links></Links>
      </div>
      <div>
        <About></About>
      </div>
    </div>
  )
}

export default Home
