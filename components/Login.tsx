"use client"

import React, { useState } from 'react';
import GetApp from './GetApp';
import Link from 'next/link';
import Image from 'next/image';
import { EyeOff, Eye } from 'lucide-react'
import Footer from './Footer';

type Props = {}

const Login = (props: Props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };


  return (
    <div>
        <div className={`container ${isSignUp ? 'sign-up-mode' : ''} mb-28`}>
          <div className="forms-container">
            <div className="signin-signup">


              <form className="sign-in-form">
                <Link href="/" className="mb-10">
                <span className="font-semibold text-3xl absolute top-[-110px] right-[80px]">Trek</span><span className="text-4xl font-bold text-green-500 absolute top-[-114px] right-[30px]">EZ</span>
                </Link>
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" id='username' placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type={showPassword ? 'text' : 'password'} placeholder="Password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
                  {showPassword ? <Eye className='text-gray-400 cursor-pointer absolute bottom-4 right-5' size={24} onClick={togglePasswordVisibility} /> : <EyeOff className='text-gray-400 cursor-pointer absolute bottom-4 right-5'size={24} onClick={togglePasswordVisibility} />}
                </div>
                <button type="submit" className="btn solid">login</button>
                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>  


              <form className="sign-up-form">
              <Link href="/" className="mb-10">
                <span className="font-semibold text-4xl text-green-500 textL  absolute top-[-114px] left-[98px]">EZ</span><span className="text-3xl font-bold absolute textL top-[-110px] left-[30px]">Trek</span>
                </Link>
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" required  />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email"required  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type={showPassword ? 'text' : 'password'} placeholder="Password" required />
                  {showPassword ? <Eye className='text-gray-400 absolute bottom-4 right-5 cursor-pointer' size={24} onClick={togglePasswordVisibility} /> : <EyeOff className='text-gray-400 cursor-pointer  absolute bottom-4 right-5'size={24} onClick={togglePasswordVisibility} />}
                </div>
                <button type="submit" className="btn">Sign up</button>
                <p className="social-text">Or Sign up with social platforms</p>
                <div className="social-media">
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </form>
            </div>
          </div>
    
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content mt-10">
              <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              style={{ width: 'auto', height: 'auto' }} 
              className="sticky left-[240px] top-[60px] w-10 lg:w-[50px] camp-imgL"
            />
                <h3>New here ?</h3>
                <p className='mb-5'>
                Welcome to TrekEZ, your ultimate companion for exploring the breathtaking beauty of nature. <br />
                Don't miss out on the excitement. Sign up now and let TrekEZ be your trusted companion on every journey into nature's beauty."
                </p>
                <button className="btn transparent" type='submit' onClick={handleSignUpClick}>
                  Sign up
                </button>
              </div>
              <img src="/log.svg" className="image" alt="" />
            </div>
            <div className="panel right-panel">
              <div className="content mt-12">
              <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              style={{ width: 'auto', height: 'auto' }} 
              className="absolute left-[165px] bottom-[225px] w-10 lg:w-[50px] camp-imgR"
            />
                <h3>One of us ?</h3>
                <p className='mb-5'>
                Ready to begin your next great adventure? Sign up with Hilink today and start exploring the wonders of the great outdoors like never before. <br /> <br />
                Join a vibrant community of fellow adventurers from around the globe, sharing tips, stories, and new climbing spots every month.
                </p>
                <button className="btn transparent" type='submit' onClick={handleSignInClick}>
                  Sign in
                </button>
              </div>
              <img src="/register.svg" className="image" alt="" />
            </div>
          </div>
        </div>
    </div>
        
  );
}

export default Login;
