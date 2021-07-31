import { Page } from "./page";

export type ExistingFeatures = "restaurant-booking" | "hotel-booking"

export interface Feature {
  id: string;
  name: string;
  page_id?: string;

}
