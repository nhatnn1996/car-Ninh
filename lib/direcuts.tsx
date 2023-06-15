import { Directus } from '@directus/sdk';
const directus = new Directus(process.env.CMS as string);
export default directus