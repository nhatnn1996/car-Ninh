import axiosCms from '@/services/api/cms';
import { ServiceProps } from '@/lib/interface/products';
import HeadMeta from '@/ui/head';
import Header from '@/ui/widget/section-1';

const waitAllList = async (list: ServiceProps[]) => {
  const promises = list.map((item) => {
    return axiosCms.get('/product', {
      params: {
        fields: '*,images.*,category.*',
        filter: { category: { _eq: item.id } },
        limit: 10,
        sort: '-date_created',
      },
    });
  });
  const result: any[] =
    (await Promise.all(promises).catch((error) => console.log(error))) || [];
  return result.map((item: any, index: number) => ({
    id: list[index]?.id,
    data: item.data,
  }));
};

export default async function Home() {
  // const services = await axiosCms('/service');
  // const shoseCategories = await axiosCms('/product_categories?limit=5');
  // const listShoes = await waitAllList(shoseCategories.data);
  const site: any = await axiosCms
    .get('/site')
    .catch((error) => console.log(error));

  const data = {
    description: site?.data?.meta_content,
    title: 'Áo bóng đá, Giày đá bóng đá chính hãng - QNsport',
    url: process.env.PUBLIC_URL,
    image: site?.data?.thumbnail,
    content:
      'Áo bóng đá, Áo đá bóng chính hảng, Áo đá bóng tốt, Áo đá bóng xịn ... ',
  };
  return (
    <div>
      <HeadMeta data={data} />
      <Header />
      <main className="animate-page"></main>
    </div>
  );
}

export const revalidate = 1000;
