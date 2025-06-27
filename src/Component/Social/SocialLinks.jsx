import React from 'react'
import GitHubCard from '../Github/GithubCard'
import LinkedInCard from '../LinkedIn/LinkedInCard'
import DevCard from '../Dev/DevCard'
import TwitterCard from '../Twitter/TwitterCard'

const SocialLinks = () => {
  return (
    <div className='flex gap-8 justify-center'>
      <GitHubCard></GitHubCard>
      <LinkedInCard></LinkedInCard>
      <DevCard></DevCard>
      <TwitterCard></TwitterCard>
    </div>
  )
}

export default SocialLinks
