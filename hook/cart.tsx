import { fetcher } from '@/services/api/cms';
import { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

let fisrtLoaded = false;
const useCart = () => {
  const { data, error, mutate } = useSWR('cart', {
    refreshInterval: 0,
    revalidateOnMount: false,
  });
  const params = {
    id: { _in: data?.data.map((element: any) => element.id) || [] },
  };
  const { data: products } = useSWR(
    data?.data.length > 0 ? '/product?filter=' + JSON.stringify(params) : '',
    fetcher,
  );
  const productFindById: any = {};
  products?.data.forEach((element: any) => {
    productFindById[element.id] = element;
  });

  useEffect(() => {
    let init = { data: [] };
    fisrtLoaded = true;
    try {
      const locals = localStorage.getItem('cart');
      if (locals) init = JSON.parse(locals as string);
    } catch (error) {}
    mutate(init);
  }, []);
  const updateDataCart = (value: any) => {
    window.localStorage.setItem('cart', JSON.stringify({ data: value }));
    mutate({ data: value });
  };
  const insertTheCart = (id: number, quantity: number, size: string) => {
    const newData = [...data.data, { id, quantity, size }];
    updateDataCart(newData);
  };
  const removeTheCart = (id: number) => {
    const newData = [...data.data];
    const index = newData.find((element: any) => element.id === id);
    newData.splice(index, 1);
    updateDataCart(newData);
  };
  const clearTheCart = () => {
    window.localStorage.setItem('cart', '');
    mutate({ data: [] });
  };
  const updateTheCart = (id: number, number: number) => {
    const newData = [...data.data];
    const index = newData.findIndex((element: any) => element.id === id);
    const item = newData[index];
    if (!item) return;
    newData[index] = { ...item, quantity: number };
    updateDataCart(newData);
  };

  const productInCart =
    data?.data.map((element: any) => {
      const item = productFindById[element.id];
      return { ...item, ...element };
    }) || [];

  return {
    cart: productInCart,
    insertTheCart,
    removeTheCart,
    updateTheCart,
    clearTheCart,
    isLoading: !data,
  };
};
export default useCart;
