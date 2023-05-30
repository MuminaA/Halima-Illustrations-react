import React from 'react'
import Hali from '../../assets/HaliPic.png';

const Aboutme = () => {
  return (
    <div className='flex justify-between px-48 py-16 items-center'>
      <div className='flex flex-col gap-5'>
        <h2 className="text-5xl font-bold text-[#1F2937] font-headerFont">Halima</h2>
        <p className='font-bodyFont text-sm text-[#4B5563]'>It is a long established fact that a reader will be<br/>
         distracted by the readable content of a page when<br/> 
         looking at its layout. The point of using Lorem<br/>
        Ipsum is that it has a more-or-less normal
        <br/> distribution of letters, as opposed to using.</p>
      </div>
      <div>
        <img className='w-[55rem]' src={Hali}></img>
      </div>
    </div>
  )
}

export default Aboutme
