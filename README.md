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
