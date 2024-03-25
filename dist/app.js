"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hero_services_1 = __importDefault(require("./services/hero.services"));
const hero = hero_services_1.default.findHeroById(1);
console.log(hero?.name ?? "No HeroFound!!");
