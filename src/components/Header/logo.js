import Image from 'next/image'
import { Link } from '@/src/i18n/routing';
import profileImg from '@/public/logo2.png'


const Logo = () => {
  return (
    <div> 
    <Link href={"/"} style={{backgroundColor:""}} className='md:flex overflow-hidden items-center'>
      <div style={{}} className='   overflow-hidden w-24  md:w-48 '>
        <Image alt='logo' style={{   backgroundColor:"rgb(247 247 247)"}} src={profileImg} className='  h-auto'></Image>
        </div>
      {/* <div style={{}} className='   overflow-hidden w-24  md:w-14 '>
        <Image alt='logo' style={{   backgroundColor:"rgb(247 247 247)"}} src={profileImg2} className='  h-auto'></Image>
        </div> */}   
    </Link>
   
    </div>
  )
}
export default Logo