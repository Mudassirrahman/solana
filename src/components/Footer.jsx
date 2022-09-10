import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaReddit } from "react-icons/fa"

function Footer() {
  return (
    <>
      <div className="bg-info bg-opacity-10 rounded-4">
        <div className="container">
          <footer className="pt-5">
            <div className="row d-flex justify-content-between">
              <div className="col-md-5 offset-md-0 mb-3 text-center">
                <form>
                  <h1>Never miss a news</h1>
                  <p className="text-black">Subscribe to our newsletter for getting latest update about NFTs.</p>
                  <div className="d-flex flex-column flex-sm-row w-100">
                    <label htmlFor="newsletter1" className="visually-hidden">Enter your Email</label>
                    <input id="newsletter1" type="text" className="form-control rounded-start rounded-end-0" placeholder="Email address" />
                    <button className="btn bg-info bg-opacity-75 rounded-end  " type="button">Subscribe</button>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address" />
                    <label className="form-check-label" htmlFor="same-address">By sunscribing i agree to the Privacy Notice and Terms and Conditions of the website</label>
                  </div>
                </form>
              </div>

              <div className=" col-md-5 offset-md-1 mb-3 text-center">
                <h1>join our community</h1>
                <p className="text-black">B a part of our community by joining us at:</p>
                <ul className="list-unstyled d-flex justify-content-center mt-5">
                  <li className="ms-3"><a className="link-dark" href="#"><FaFacebook className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" /></a></li>
                  <li className="ms-3"><a className="link-dark" href="#"><FaInstagram className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" /></a></li>
                  <li className="ms-3"><a className="link-dark" href="#"><FaTwitter className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" /></a></li>
                  <li className="ms-3"><a className="link-dark" href="#"><FaLinkedin className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" /></a></li>
                  <li className="ms-3"><a className="link-dark" href="#"><FaReddit className="fs-1 border-dark p-2 bg-info bg-opacity-75 rounded-2 text-white" /></a></li>
                </ul>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-3 my-3 border-top">
              <p className='text-dark'>© 2022 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-dark text-decoration-none" href="#">Privacy policy</a></li>
                <li className="ms-3"><a className="link-dark text-decoration-none" href="#">Terms & conditions</a></li>
                <li className="ms-3"><a className="link-dark text-decoration-none" href="#">Help center</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Footer