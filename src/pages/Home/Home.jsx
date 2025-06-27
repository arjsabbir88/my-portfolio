import SocialLinks from '@/Component/Social/SocialLinks'
import { Title } from '@/Component/Welcome/Title'
import React from 'react'

const Home = () => {
  return (
    <div className='text-white'>
      <Title></Title>
      <div>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  )
}

export default Home
