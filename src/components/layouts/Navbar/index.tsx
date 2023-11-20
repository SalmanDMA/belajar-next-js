import Script from 'next/script';
import style from './Navbar.module.css';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
 const { data }: any = useSession();
 return (
  <div className={style.navbar}>
   <Script id='script-title' strategy='lazyOnload'>{`document.getElementById('title').innerHTML = 'Navbar'`}</Script>
   <div className='big' id='title'></div>
   <div className={style.profile}>
    {data?.user.image && <Image width={30} height={30} className={style.avatar} src={data.user.image} alt={data.user.fullname} />}
    {data && data.user.fullname}
    {data ? (
     <button className={style.button} onClick={() => signOut()}>
      Sign Out
     </button>
    ) : (
     <button className={style.button} onClick={() => signIn()}>
      Sign In
     </button>
    )}
   </div>
  </div>
 );
};

export default Navbar;
