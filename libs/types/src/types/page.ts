import { Content } from "./content";

export type PageRestrictions = 'none' | 'user';
type IconName = "Pencil" | "Menu";

export type AdminPage = {
  id: string;
  path: string;
  name: string;
  enabled: boolean;
  target: string;
  restricted?: true;
};

export type Page = {
  id: string;
  icon: IconName;
  path: string;
  name: string;
  enabled: boolean;
  content_id: Content['id'];
}
