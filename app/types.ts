export type Properties = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  lat: number;
  lng: number;
  type: string;
  status: string;
  yearBuilt: number;
  parking: boolean;
  furnished: boolean;
  image: string;
};
export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

export type StrapiResponse<T> = {
  data: T[];
};
export type StrapiProject = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  price: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  lat: number;
  lng: number;
  type: string;
  statusHome: string;
  yearBuilt: number;
  parking: boolean;
  furnished: boolean;
  image?: {
    url: string;
    format?: {
      thumbnail?: { url: string };
      large?: { url: string };
      medium?: { url: string };
      small?: { url: string };
    };
  };
};

export type StrapiPost = {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  date: string;
};
