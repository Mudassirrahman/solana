import React from 'react'

function NftsMenuBar() {
  return (
    <>
        <div className='container d-flex justify-content-between mt-5'>
            <div className='d-flex'>
                <h5 className='pt-3 pe-2'>Sort by</h5>
                <div className="dropdown">
  <button className="dropdown-toggle px-4 py-3 mx-2 rounded-3 border-0" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
            </div>
            <div>
                <button className='px-5 py-3 mx-3 rounded-3 bg-info bg-opacity-75 border-0'>Today</button>
                <button className='px-4 py-3 mx-3 rounded-3 border-0'>Last 7 days</button>
                <button className='px-4 py-3 mx-3 rounded-3 border-0'>Last 30 days</button>
            </div>
        </div>
    </>
  )
}

export default NftsMenuBar