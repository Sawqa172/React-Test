import { Content } from './content';

export interface OnBoarding {
  id: number;
  slug: string;
  video: string;
  image: string;
  title: string;
  description: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  contents: Content[];
  child: OnBoarding[];
}
