import { socialImgs } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return <>
  <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <Link href={socialImg.link} key={index} className="icon" target='_blank'>
              <img src={socialImg.imgPath} alt="social icon" />
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Samaa Elbakry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
}

export default Footer
