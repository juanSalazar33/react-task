import React from "react";
import ContentLoader from "react-content-loader";
const MyLoader = props => (
    <ContentLoader
      speed={2}
      width={375}
      height={400}
      viewBox="0 0 375 400"
      backgroundColor="antiquewhite"
      foregroundColor="#ffe39d"
      {...props}
    >
      <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
      <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
      <rect x="42" y="77" rx="10" ry="10" width="375" height="217" />
    </ContentLoader>
  )
  
 MyLoader.metadata = {
    name: 'Nic Bovee', // My name
    github: 'ghettifish', // Github username
    description: 'A simple favorite from the DoorDash local favorites.' // Little tagline
    
  }
  
  export {MyLoader}