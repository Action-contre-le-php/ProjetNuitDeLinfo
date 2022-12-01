import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <div className='flex flex-col space-y-32 m-32'>
      <div className='self-center'>
        <h1>Jeu de la Vie</h1>
      </div>
      <div>
        <p>
          Aujourd'hui, grâce aux avancées des traitements, les personnes atteintes du VIH sous trithérapie ne développent plus le SIDA, ont une durée de vie et une qualité de vie normale. Elles n'ont plus de risque de contaminer leur(s) partenaire(s) tant qu'ils et elles suivent leur traitement. Il existe également un traitement préventif du VIH (la PrEP) et un traitement d'urgence (le TPE) disponible aux services d'urgences en cas de prise de risque involontaire.
        </p><br></br>
        <p>
          Pourtant, nous faisons toujours face à une population générale qui manque cruellement d'information et d'éducation à la sexualité, et particulièrement chez les jeunes adultes débutant leur vie sexuelle. Tabous, non-dits, manque de cours d'éducation sexuelle en milieu scolaire et préjugés négatifs, sont autant de facteurs qui peuvent empêcher l'information de circuler et les personnes de s'épanouir.
        </p><br></br>
        <p>
          Dans ce site vous y trouverez un serious game (accessible via le boutton ci-dessous). Ce serious game a pour objectif de sensibiliser les jeunes (mais aussi les plus agés) aux problématiques liées à la santé sexuelle aux travers d'une approche ludique et dédramatisante de la sexualité. Via ce jeu nous aimerions aider les plus jeunes à devenir acteurs de leur santé sexuelle.
        </p>
      </div>
      <div className='self-center'>
        <Button size="lg" color="green">Commencer le Jeu de la vie</Button>
      </div>
    </div>
  )
}