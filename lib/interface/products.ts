export interface ServiceProps {
  id: number;
  status: 'published';
  user_created: string | any;
  user_updated: string | any;
  title: string;
  date_updated: string;
  date_created: string;
  slug: string;
  short_description: null | string;
  extra: any;
  thumbnail: string;
}
