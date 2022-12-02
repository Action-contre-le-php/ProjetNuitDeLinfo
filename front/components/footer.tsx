import Image from "next/image"
import Link from "next/link"
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Footer() {
    const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
    return (
      <div className="w-full">
        <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Êtes vous sûr de vouloir continuer ?</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Non</span>
          </Button>
          <a target="_blank" href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Oui</span>
          </Button>
          </a>
        </DialogFooter>
      </Dialog>
    </Fragment>
        <div className="flex flex-row sticky bottom-0 w-full  flew-nowrap h-auto bg-[#fecdd3] 2xl:h-auto">
            <div className="w-3/12 m-4 2xl:m-4">
                <p className="text-center">Liens utiles :</p><br/>
                <a target="_blank" href='https://www.sida-info-service.org'><p className="text-center text-blue-600 underline-offset-1">Sida info service</p></a>
                <a target="_blank" href='https://www.hepatites-info-service.org'><p className="text-center text-blue-600 underline-offset-1">Hepatites info service</p></a>
                <a target="_blank" href='https://www.vih-info-soignants.fr'><p className="text-center text-blue-600 underline-offset-1">Vih infos soignats</p></a>
                <a target="_blank" href='https://www.ligneazur.org'><p className="text-center text-blue-600 ">Ligneazur</p></a>
            </div>
                <div className="w-3/12 m-10 2xl:m-10">
                    <Link href="/credits">
                    <p className="text-center">Crédits</p><br></br>
                    </Link>
                    <p className="text-center" onClick={handleOpen}>By Action contre le PHP Corporation</p>
                </div>
                <div className="flex flex-col w-3/12">
                    <div className="self-center m-14 2xl:m-18">
                        <div>
                            <Image src="/logo-uha.png" alt="logo" width={200} height={200}/>
                        </div>
                    </div>    
                </div>
                <div className="flex flex-col w-3/12">
                    <div className="self-center m-2 2xl:m-2">
                        <div>
                            <Image src="/uha4.0-logo.png" alt="logo" width={100} height={100}/>
                        </div>
                    </div>    
                </div>
        </div>
      </div>    
    )
  }