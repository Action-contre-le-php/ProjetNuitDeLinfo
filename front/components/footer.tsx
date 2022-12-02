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
      <div>
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
        <div style={{ position: "static", bottom: 0, width:"100%", height:'100%' }} className="flex flex-row flew-nowrap bg-[#fecdd3]">
                <div className="w-4/12 mt-10">
                    <Link href="/credits">
                    <p className="text-center">Crédits</p><br></br>
                    </Link>
                    <p className="text-center" onClick={handleOpen}>By Action contre le PHP Corporation</p>
                </div>
                <div className="flex flex-col w-4/12">
                    <div className="self-center mt-14">
                        <div>
                            <Image src="/logo-uha.png" alt="logo" width={200} height={200}/>
                        </div>
                    </div>    
                </div>
                <div className="flex flex-col w-4/12">
                    <div className="self-center mt-2">
                        <div>
                            <Image src="/uha4.0-logo.png" alt="logo" width={100} height={100}/>
                        </div>
                    </div>    
                </div>
        </div>
      </div>    
    )
  }