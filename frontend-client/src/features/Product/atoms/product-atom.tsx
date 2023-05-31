import { atom } from "recoil";

export const selectedShoePriceState = atom({
  key: "selectedShoePriceState",
  default: 0,
});

export const producsListAtom = atom({
  key: "producsListAtom",
  default: [],
});
