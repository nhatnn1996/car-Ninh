import dayjs from 'dayjs';
import { fetcher } from './api/cms';

export const listImageError: any[] = [];
export const addImageError = (url: string) => {
  listImageError.push(url);
};

export const renderImageById = (id: String) => {
  const domain = id.includes('http') ? id : process?.env?.CMS;
  return domain + '/assets/' + id;
};

const enums = [
  'Chủ nhật',
  'Thứ 2',
  'Thứ 3',
  'Thứ 4',
  'Thứ 5',
  'Thứ 6',
  'Thứ 7',
];

export const dayInWeek = (time: any) => {
  const number = enums[dayjs(time).day()];
  return number + ' ' + dayjs(time).format('DD-MM-YYYY');
};

export const optionsFetcher = {
  fetcher: fetcher,
  dedupingInterval: 2000,
  focusThrottleInterval: 4000,
  loadingTimeout: 5000,
};

export function formatVND(x: number) {
  if (!x) return 0;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const URLparamsToObject = (params: any) => {
  const objParams: any = {};
  params.forEach((value: string, key: string) => {
    objParams[key] = value;
  });
  return objParams;
};
