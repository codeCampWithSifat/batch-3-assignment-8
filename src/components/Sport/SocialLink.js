import React from 'react';
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const SocialLink = () => {
  return (
    <div>
       <a
          target="_blank"
          href="https://www.facebook.com/"
          className="m-3 text-danger"
        >
          <FiFacebook />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/"
          className="m-3 text-danger"
        >
          <BsInstagram />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/"
          className="m-3 text-danger"
        >
          {" "}
          <IoLogoYoutube />
        </a>
    </div>
  )
}

export default SocialLink
