


export default function Header() {


  return (
   
    <div className="flex items-center justify-center bg-white shadow-lg   ">
    <div className='w-full md:w-[96vw] text-sm md:text-lg mb-3 mt-1 '>
    <div className=' w-full flex justify-between items center'>
        <h3 className='text-2xl md:text-3xl  hover:text-blue-500 cursor-pointer'><span className='text-blue-800 hover:text-blue-500' ><a href="/">palagea</a></span><a href="/">.com</a></h3>
       <div className=''> <h3 className='flex justify-between items-center '>
        <span className=' ml-3  hover:text-blue-500 cursor-pointer' > <a href="Contact"> Contact </a> </span>
        <span className=' ml-3 hover:text-blue-500 cursor-pointer'> <a href="Aboutme">About Me </a> </span> 
        <span className='ml-3 hover:text-blue-500 cursor-pointer'><a href="Credentials">Credentials</a></span></h3></div>
  
    </div>
    </div>
    </div>
  )
}
