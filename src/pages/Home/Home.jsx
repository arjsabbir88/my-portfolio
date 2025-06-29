import Links from '@/Component/Links/Links'
import { Title } from '@/Component/Welcome/Title'
import React from 'react'
import About from '../About/About'
import { Technical } from '../TechnicalSkills/Technical/Technical'
import Tools from '../TechnicalSkills/Tools/Tools'



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
      <div>
        {/* <TechnicalSkills></TechnicalSkills> */}
        <Technical></Technical>
        <Tools></Tools>
      </div>
    </div>
  )
}

export default Home
