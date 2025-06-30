import Links from '@/Component/Links/Links'
import { Title } from '@/Component/Welcome/Title'
import React from 'react'
import About from '../About/About'
import { Technical } from '../TechnicalSkills/Technical/Technical'
import Tools from '../TechnicalSkills/Tools/Tools'
import { TimelineDemo } from '../Project/Project'
import { Contact } from '../Contact/Contact'



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
      <div>
        <TimelineDemo></TimelineDemo>
      </div>
      <div className='bg-black'>
        <Contact></Contact>
      </div>
    </div>
  )
}

export default Home
