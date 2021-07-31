import { Page } from "../page";

export interface PageCollection {
  [index: string]: Page;
}

export type PagesCollection = Array<PageCollection>;
