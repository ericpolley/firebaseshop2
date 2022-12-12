import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex items-center justify-center bg-slate-200 shadow-lg lg:mt-32 mt-16 ">
    <div className='w-[96vw] md:w-[50vw] text-sm md:text-lg mb-3 mt-1 '>
    <div className=' w-full flex flex-row justify-between items center'>
        <h6 className='text-2xl md:text-1xl  hover:text-blue-500 cursor-pointer'><span className='text-blue-800 hover:text-blue-500' ><Link to="/">palagea</Link></span><Link to="/">.com</Link></h6>
       <div className='flex flex-row'>
       <p className=" text-xs mt-5 mr-5">copyright 2022 Palagea Matveev</p>
      <p className=" ml-5 mt-3"><a href="mailto:palageamatveev@gmail.com" className="text-blue-800 hover:text-blue-500"> Email </a>.</p>
        </div>
  
    </div>
    </div>
    </div>
  )
}
