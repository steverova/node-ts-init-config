"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const heroes_1 = require("../data/heroes");
const findHeroById = (id) => {
    return heroes_1.heroes.find((hero) => hero.id === id);
};
const heroServices = {
    findHeroById
};
exports.default = heroServices;
