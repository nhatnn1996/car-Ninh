import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center py-10 text-center">
      <div className="flex flex-col items-center justify-center">
        <img src="/images/404.png" alt="" style={{ maxHeight: 400 }} />
        <div className="mt-10">
          <a
            href="/"
            className="flex w-fit cursor-pointer items-center rounded-md bg-stone-50 px-4 py-1.5"
          >
            <HomeIcon className="mr-1 h-4 w-4" /> Quay về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
