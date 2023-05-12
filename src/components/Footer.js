import React from 'react';
import { BsFacebook, BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='py-2 bg-sky-500 text-center border-t-8 border-violet-700'>
      <a className='text-white font-semibold' href="mailto:aashishgulshan@gmail.com">aashishgulshan@gmail.com</a>
      <div className='flex gap-2 justify-center items-center text-2xl p-2'>
        <a className=' text-amber-400 hover:scale-125' href="https://www.linkedin.com/in/aashish-gulshan/" target="_blank"><BsLinkedin/></a>
        <a className=' text-amber-400 hover:scale-125' href="https://www.facebook.com/IamAsgn37" target="_blank"><BsFacebook/></a>
        <a className=' text-amber-400 hover:scale-125' href="https://github.com/IamAsgn37" target="_blank"><BsGithub/></a>
        <a className=' text-amber-400 hover:scale-125' href="https://www.instagram.com/aashish_gulshan/" target="_blank"><BsInstagram/></a>
      </div>
      <p className=' text-violet-800 font-semibold'>©2023 <i>Developed by:</i> Aashish Gulshan. Made with ❤️ in India</p>
    </div>
  )
}
