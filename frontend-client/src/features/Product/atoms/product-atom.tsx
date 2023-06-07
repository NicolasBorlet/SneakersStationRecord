import { atom } from "recoil";
import { Shoessize } from "../../../shared/types/shared-type";

export const selectedShoePriceState = atom({
  key: "selectedShoePriceState",
  default: 0,
});

export const selectedShoesState = atom<Shoessize>({
  key: "selectedShoesState",
  default: {
    ProductID: 1,
    ShoesSize: 23,
    ShoesSizePrice: 89,
    ShoesSizeQuantity: 100,
    DiscountID: 1,
    ShoesSizeID: 1,
  },
});

export const producsListAtom = atom({
  key: "producsListAtom",
  default: [],
});
