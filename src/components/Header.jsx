import { FacebookLogo, HomeIcon } from '@/icons'
import useUserStore from '../stores/userStore'

function Header() {
 const logout = useUserStore(state => state.logout)
  return (
   <div className='text-4xl py-4 border flex gap-4'>
		 <FacebookLogo className='w-16' />
		 <HomeIcon className='w-16' />
     <button className='btn btn-primary' onClick={logout}>Logout</button>
   </div>
 )}

export default Header
