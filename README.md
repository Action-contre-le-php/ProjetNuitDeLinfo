# Projet Nuit De l'info - Action Contre le PHP
Pour répondre à la problématique de cette année, nous avons imaginé un jeu narratif textuel, dans lequel l'utilisateur va faire des choix, et cela le mènera à des fins différentes.

Technologies utilisées :
  - NextJS (Framework Front)
  - Tailwindcss - Material Tailwind (Framework css)
  - Docker (Mise en production) 

## Démarrage du projet

Dev
```
  npm install
  npx next dev
```

Prod
```
  docker build -t nextjs-docker .
  docker run -p 3000:3000 nextjs-docker
```

Easter eggs :
    - Nyan Cat (Tapez nyan dans la page d'accueil, un gif de nyan cat apparaîtra sur votre page d'accueil)
    - Stormtrooper (Tapez trooper dans la page d'accueil, un gif de stormtrooper apparaîtra sur vôtre écran)
    - Rickroll (Cliquez sur "By Action contre le PHP" puis sur oui dans le dialog, vou serez ensuite redirigé sur une vidéo youtube "vous avez été Rickroll hihi")