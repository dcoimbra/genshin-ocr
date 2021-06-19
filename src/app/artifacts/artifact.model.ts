export interface Artifact {
  id: string,
  name: string;
  set: string;
  level: number;
  maxLevel: number;
  equippedTo: string;
  mainStat: string;
  mainStatBonus: string;
  subStats: string[];
  subStatsBonuses: string[];
}
