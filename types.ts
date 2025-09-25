
export enum Page {
  Home = '/',
  StudioSpaces = '/studios',
  CreativeServices = '/services',
  About = '/about',
  BookNow = '/book',
  Contact = '/contact',
}

export interface PageInfo {
  path: Page;
  name: string;
  title: string;
  description: string;
}
