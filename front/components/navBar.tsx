import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="flex items-center flex-wrap p-3">
        <Link href="/" className='inline-flex items-center p-2 mr-4'>
          <span className='text-xl text-white font-bold uppercase tracking-wide'>
            Accueil
          </span>
        </Link>
      </nav>
    </>    
  )
}