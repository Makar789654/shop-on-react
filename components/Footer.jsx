import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube ,AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Makar All rights not reserverd</p>
      <p className="icons">
        <Link href='https://www.instagram.com/'>
        <AiFillInstagram />
        </Link>
        <Link href='https://twitter.com/'>
        <AiOutlineTwitter />
        </Link>
        <Link href='https://www.youtube.com/'>
        <AiFillYoutube />
        </Link>
        <Link href='https://github.com/'>
        <AiOutlineGithub />
        </Link>
      </p>
    </div>
  )
}

export default Footer