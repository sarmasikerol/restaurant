import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <p>&copy; 2022 burger33.com</p>
        <span>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        </span>
       
      </div>
    </div>
  )
}

export default Footer
