import { Translation } from "./components/TargetWord/TargetWord";

export type Word = {
  id: number;
  created_at: string;
  created_by: number;
  translations: Translation[];
};
