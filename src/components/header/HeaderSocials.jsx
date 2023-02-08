import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {GrPaypal} from "react-icons/gr";

const HeaderSocials = () => {
    return ( 
        <div className = "header_socials">
        <a href="https://github.com/dinvoid"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/eldin-betalmos-ab048a240"><BsLinkedin/></a>
        <a href="https://www.paypal.me/eldin143"><GrPaypal/></a>
        </div>
    )
}


export default HeaderSocials