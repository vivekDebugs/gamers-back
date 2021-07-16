import React from 'react'
import './Navbar.css'
// import { VscListSelection } from "react-icons/vsc";
import { FiHome, FiMessageSquare } from 'react-icons/fi'
import { BsCameraVideo } from 'react-icons/bs'
import { RiFullscreenFill } from 'react-icons/ri'
import { BiInfinite } from 'react-icons/bi'
import { FaUserFriends } from 'react-icons/fa'
import { TiMessages } from 'react-icons/ti'
import { IoMdBriefcase } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className='navbar'>
           <ul className="navbar__navlist">
               {/* <li> <VscListSelection /> </li> */}
               <li> <FiHome /> </li>
               <li> <FiMessageSquare /> </li>
               <li> <RiFullscreenFill /> </li>
               <li> <BsCameraVideo /> </li>
               <li> <BiInfinite /> </li>
               <li> <FaUserFriends /> </li>
               <li> <TiMessages /> </li>
               <li> <IoMdBriefcase /> </li>
            </ul> 
        </div>
    )
}

export default Navbar
