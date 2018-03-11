import { TastingRating } from "./tasting-rating";
import { PlaceLocation } from "./place-location";

export class Coffee {
    //properties
    _id: string;
    rating: number;
    notes: string;
    tastingRating: TastingRating;

    constructor(public name: string = '', public place: string = '',
        public location: PlaceLocation = new PlaceLocation()) {
        this.tastingRating = new TastingRating();
    }
}
