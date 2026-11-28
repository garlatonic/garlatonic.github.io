import type { StaticImageData } from "next/image";

export type ChallengeImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
  detail?: string;
  highlight?: { left: string; top: string; width: string; height: string };
};

export type ImageComparison = {
  title: string;
  before: ChallengeImage[];
  after: ChallengeImage[];
};

export type Challenge = {
  title: string;
  problem: string;
  solution: string;
  keywords: string[];
  comparisons?: ImageComparison[];
  metrics?: { label: string; value: string }[];
  code?: { caption: string; source: string };
};
