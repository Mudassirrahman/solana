import React from 'react'
import {BsFacebook , BsTwitter , BsShareFill , BsThreeDots} from "react-icons/bs"
import {FaDiscord , FaRegStar} from "react-icons/fa"
import {GrLanguage} from "react-icons/gr"

function SocialIcone() {
  return (
    <>
      <div className='container d-flex justify-content-end py-3 gap-3'>
        <BsFacebook  className="" />
        <BsTwitter  className=""/>
        <FaDiscord  className=""/>
        <FaRegStar  className=""/>
        <BsShareFill  className=""/>
        <GrLanguage  className=""/>
        <BsThreeDots  className=""/>
      </div>
    </>
  )
}

export default SocialIcone