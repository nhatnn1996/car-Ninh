import '@/styles/globals.css';
import React from 'react';
import Footer from '@/ui/footer';
import Header from '@/ui/header';
import axiosCms from '@/services/api/cms';
import Script from 'next/script';
import ToastProvider from './wrap-context';
import Scroll from 'components/scroll';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const productCategories: any = await axiosCms
  //   .get('/product_categories?fields=*,*.*')
  //   .catch((error) => console.log(error));
  // const blogCategories: any = await axiosCms
  //   .get('/blog_categories')
  //   .catch((error) => console.log(error));
  // const blogs: any = await axiosCms
  //   .get('/blog?sort=-date_created&limit=6')
  //   .catch((error) => console.log(error));
  // const site: any = await axiosCms
  //   .get('/site')
  //   .catch((error) => console.log(error));

  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}

export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'auto';
// export const runtime = 'nodejs';
// export const preferredRegion = 'auto';
