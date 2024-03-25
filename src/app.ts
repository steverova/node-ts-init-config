import heroServices from "./services/hero.services";

const hero = heroServices.findHeroById(1);

console.log(hero?.name ?? "No HeroFound!!");
