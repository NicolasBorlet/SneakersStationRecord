import { atom } from "recoil";
import { HeaderLinksProps } from "../types/shared-type";

export const links: HeaderLinksProps[] = [
  {
    links: "/sneakers",
    title: "Sneakers",
  },
  {
    links: "/vinyles",
    title: "Vinyles",
  },
  {
    links: "/events",
    title: "Évènements",
  },
  {
    links: "/about",
    title: "À propos",
  },
  {
    links: "/contact",
    title: "Contact",
  },
  {
    links: "/account",
    title: "Account",
    src: "./src/assets/SHARED/icon_profile.png",
  },
  {
    links: "/cart",
    title: "Panier",
    src: "./src/assets/SHARED/icon_shopping_cart.png",
  },
];

export const tokenState = atom({
  key: "token",
  default: "",
});
