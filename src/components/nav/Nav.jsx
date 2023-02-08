import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setactiveNav]=useState('#');
  return (
    <nav>
    <a href="#home" onClick={() => setactiveNav('#')} className={activeNav==='#' ? 'active':''} ><AiOutlineHome/></a>
    <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
    <a href="#projects" onClick={() => setactiveNav('#projects')} className={activeNav==='#projects' ? 'active':''}><BiBook/></a>
    <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a>
    <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiMessageSquareDetail/></a>
 
  </nav>
  )
}

export default Nav