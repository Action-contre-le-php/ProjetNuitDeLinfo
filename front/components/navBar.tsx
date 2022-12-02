import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import trooper from "/public/trooper.gif";

export default function NavBar() {
  let [trooperDisplay, setTrooperDisplay] = useState("none");
  
  useEffect(() => {
    let codes: string[] = ["t", "r", "o", "o", "p", "e", "r"],
    position: number = 0,
    isTrooperShown: boolean = false;
    document.addEventListener('keydown', function (event: KeyboardEvent): void {
      if (event.key === codes[position]) {
        position++;
        if (position === codes.length) {
          !isTrooperShown ? setTrooperDisplay("") : setTrooperDisplay("none");
          isTrooperShown = !isTrooperShown ? true : false;
          position = 0;
        }
      } else {
        position = 0;
      }
    })
  }, [])
  
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
        <Image src={trooper} alt="photo de l'équipe" style={{float: "left", display: trooperDisplay, marginLeft: "auto", marginRight: "0", height: "100px", width: "auto"}} />
      </nav>
    </>    
  )
}