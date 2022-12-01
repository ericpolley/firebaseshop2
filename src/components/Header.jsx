import { Link } from "react-router-dom";



export default function Header() {


  return (
   
    <div className="flex items-center justify-center bg-white shadow-lg   ">
    <div className='w-full md:w-[96vw] text-sm md:text-lg mb-3 mt-1 '>
    <div className=' w-full flex justify-between items center'>
        <h3 className='text-2xl md:text-3xl  hover:text-blue-500 cursor-pointer'><span className='text-blue-800 hover:text-blue-500' ><a href="/">palagea</a></span>.com</h3>
       <div className=''> <h3 className='flex justify-between items-center '>
        <span className=' ml-3  hover:text-blue-500 cursor-pointer' > <Link to="/Contact"> Contact </Link> </span>
        <span className=' ml-3 hover:text-blue-500 cursor-pointer'> <Link to="/Aboutme">About Me </Link> </span> 
        <span className='ml-3 hover:text-blue-500 cursor-pointer'><Link to="/Credentials">Credentials</Link></span></h3></div>
  
    </div>
    </div>
    </div>
  )
}
