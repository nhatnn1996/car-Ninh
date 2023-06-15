import { renderImageById } from '@/services/helper';
interface Meta {
  description?: string;
  title?: string;
  image?: string;
  content?: string;
  url?: string;
}
const defaultMeta: Meta = {
  description: '',
  title: '',
  image: '',
  content: '',
  url: '',
};
const HeadMeta = ({ data = defaultMeta }: any) => {
  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta
        name="content"
        content={data.content || data.description || data.title}
      />
      <meta property="og:url" content={data.url} />
      <link rel="canonical" href={data.url} />
      <meta property="og:title" content={data.title} />
      <meta
        property="og:description"
        content={data.description || data.title}
      />
      <meta property="og:image" content={renderImageById(data.image)} />
    </>
  );
};

export default HeadMeta;
