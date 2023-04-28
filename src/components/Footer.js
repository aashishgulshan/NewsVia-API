import React from 'react';
import Facebook_icon from "../assets/facebook.png";
import github_icon from "../assets/github.png";
import linkedin_icon from "../assets/linkedin.png";
import instagram_icon from "../assets/instagram.png";

export default function Footer() {
  return (
    <div className=' py-[20px] bg-gradient-to-r from-fuchsia-500 to-violet-500 text-center text-white'>
        <a href="mailto:aashishgulshan@gmail.com"> aashishgulshan@gmail.com</a>
            <div className='flex gap-2 justify-center items-center'>
            <a href="https://www.linkedin.com/in/aashish-gulshan/" target="_blank"> <img src={linkedin_icon} width={35} alt="" /></a>
            <a href="https://www.facebook.com/IamAsgn37" target="_blank"> <img src={Facebook_icon} width={35} alt="" /></a>
            <a href="https://github.com/IamAsgn37" target="_blank"><img src={github_icon} width={35} alt="" /></a>
            <a href="https://www.instagram.com/aashish_gulshan/" target="_blank"><img src={instagram_icon} width={35} alt="" /></a>
            </div>
        <p>©2023 <i>Developed by:</i> Aashish Gulshan. Made with ❤️ in India</p>
    
    </div>
  )
}