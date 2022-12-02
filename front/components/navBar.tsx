import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="flex items-center flex-wrap p-3 space-x-8 bg-[#fecdd3]">
      <div>
        <Image src="/action_contre_le_php_logo.png" alt="logo" width={100} height={100}/>
      </div>
        <Link href="/" className='inline-flex items-center p-2 mr-4'>
          <span className='text-xl dark:text-white font-bold uppercase tracking-wide'>
            Accueil
          </span>
        </Link>
      </nav>
    </>    
  )
}