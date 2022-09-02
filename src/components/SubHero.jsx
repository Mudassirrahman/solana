import React from 'react'
import {FcApproval} from "react-icons/fc"
import {GiDiamonds} from "react-icons/gi"
 
function SubHero() {
  return (
    <>
    <div className='container'>
        <h1>Capsule House <FcApproval /> </h1>
        <p className='w-50'>Capsule House is a collection of 10,000 unique gachapon NFTs - a digital version of the collectible toys popular...</p>
    </div>
    <div className='container d-flex'>
    <div className='p-3'>
        <h1>10.0k</h1>
        <p>items</p>
    </div>
    <div  className='p-3'>
        <h1>3.8k</h1>
        <p>owners</p>
    </div>
    <div  className='p-3'>
        <h1> <GiDiamonds className='fs-1' />24.8k</h1>
        <p>total volume</p>
    </div>
    <div  className='p-3'>
        <h1> <GiDiamonds className='fs-1' />0.23</h1>
        <p>floor price</p>
    </div>
    <div  className='p-3'>
        <h1> <GiDiamonds className='fs-1' />0.19</h1>
        <p>best offer</p>
    </div>
    </div>
    <div className='container '>
        <a href="" className='text-decoration-none p-3 text-dark' >Items</a>
        <a href="" className='text-decoration-none p-3 text-dark' >Activity</a>
    </div>
    </>
  )
}

export default SubHero