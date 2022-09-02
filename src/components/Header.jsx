import React from 'react';
import { BiUserCircle } from "react-icons/bi"
import { RiEnglishInput } from "react-icons/ri"

function Header() {
    return (
        <>
            {/* <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
       <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        
      </ul>
      <div className="col-md-3 text-end">
        <ul className="nav nav-pills">
        <li className='nav-item'><a href="#" className='nav-link'><BiUserCircle className='fs-2' /> </a></li>
        <li className='nav-item'><a href="#" className='nav-link'><RiEnglishInput className='fs-3' /> </a></li>
        </ul>
      </div>
    </header>
  </div> */}
            <header>
                <div className="px-3 py-2 text-bg-dark">
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                                <span className="fs-4">Solana</span>
                            </a>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="#" className="nav-link text-white">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">

                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">

                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">

                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link text-white">

                                        Customers
                                    </a>
                                </li>
                                <li className='dropdown'><a href="#" className='nav-link text-white dropdown'>
                                    <div className="flex-shrink-0 dropdown">
                                        <a href="#" className="d-block link-secondary text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BiUserCircle className='fs-3 text-white' />
                                        </a>
                                        <ul className="dropdown-menu text-small shadow">
                                            <li><a className="dropdown-item" href="#">New project...</a></li>
                                            <li><a className="dropdown-item" href="#">Settings</a></li>
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                                        </ul>
                                    </div>
                                 </a></li>
                                <li><a href="#" className='nav-link text-white'><RiEnglishInput className='fs-4' /> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-2 border-bottom mb-3">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto w-75" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-light text-dark me-2">Wallet</button>

                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header