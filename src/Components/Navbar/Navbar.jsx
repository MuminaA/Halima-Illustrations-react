import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar flex justify-between md:px-48 md:py-8 bg-white'>
        <div className='brand'>
            <img src={logo} className='w-48'></img>
            {/* <h1 className=''>Halima Illustrations</h1> */}
        </div>
        <div className='links flex items-center font-headerFont'>
            <ul className='flex gap-3 items-center'>
                <li><a href="">
                    Home</a>
                </li>
                <li><a href="">
                    Shop</a>
                </li>
                <li><a href="">
                    About Me</a>
                </li>
                <li><a href="">
                    Contact</a>
                </li>
                <li>
                    <div className='absolute bg-blue-500 rounded-2xl px-2 w-0 h-4 top-16 right-[11.8rem] flex justify-center items-center'>
                        <span className='text-xs font-bold'>0</span>
                    </div>
                    <a href=""><ShoppingBagIcon/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
