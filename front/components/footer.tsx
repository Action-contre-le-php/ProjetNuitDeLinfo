import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
      <div>
        <div  className="flex flex-row sticky bottom-0 w-full  flew-nowrap h-40 bg-[#fecdd3] 2xl:h-48">
                <div className="w-4/12 mt-10 2xl:mt-10">
                    <Link href="/credits">
                    <p className="text-center">Crédits</p><br></br>
                    </Link>
                    <p className="text-center">By Action contre le PHP Corporation</p>
                </div>
                <div className="flex flex-col w-4/12">
                    <div className="self-center mt-14 2xl:mt-18">
                        <div>
                            <Image src="/logo-uha.png" alt="logo" width={200} height={200}/>
                        </div>
                    </div>    
                </div>
                <div className="flex flex-col w-4/12">
                    <div className="self-center mt-2 2xl:mt-7">
                        <div>
                            <Image src="/uha4.0-logo.png" alt="logo" width={100} height={100}/>
                        </div>
                    </div>    
                </div>
        </div>
      </div>    
    )
  }