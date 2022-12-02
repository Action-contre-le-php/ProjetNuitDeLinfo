import Image from "next/image"
import teamPicture from "/public/team_bo_gausse.webp"

export default function Credits() {
  return (
    <>
      <div className="flex flex-col space-y-5 m-5">
        <div className="self-center">
          <span className='text-xl dark:text-white font-bold tracking-wide self-center'>
            Equipe Action contre le PHP
          </span>
        </div>
        <div className="self-center">
          <Image src={teamPicture} alt="photo de l'équipe" />
        </div>
      </div>
    </>
  )
}