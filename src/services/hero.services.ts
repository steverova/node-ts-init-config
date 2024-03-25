import { heroes } from "../data/heroes";

const findHeroById = (id: number) => {
    return heroes.find((hero) => hero.id === id);
};

const heroServices = {
    findHeroById
}

export default heroServices;
