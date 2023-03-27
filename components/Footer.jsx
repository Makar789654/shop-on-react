import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube ,AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Makar All rights not reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillYoutube />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer