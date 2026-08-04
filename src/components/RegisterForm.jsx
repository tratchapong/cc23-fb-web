function RegisterForm() {
 return (
   <>
     <div className="text-3xl text-center opacity-70">Create a new account</div>
     <div className="divider opacity-60"></div>
     <form onSubmit={e=>e.preventDefault()} className='flex flex-col gap-5 p-4 pt-3'>
       <div className="flex gap-2">
         <input type="text"
           placeholder='First name'
           className='input input-bordered w-full' />
         <input type="text"
           placeholder='Last name'
           className='input input-bordered w-full' />
       </div>
       <input type="text"
         placeholder='Email or Phone number'
         className='input input-bordered w-full' />
       <input type="password"
         placeholder='New password'
         className='input input-bordered w-full' />
       <input type="password"
         placeholder='Confirm password'
         className='input input-bordered w-full' />
       <button className='btn btn-secondary text-xl text-white'>Sign up</button>
     </form>
   </>
 )}
export default RegisterForm
