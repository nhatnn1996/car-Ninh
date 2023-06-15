'use client';
import Image from "next/image";
interface ParamsProps {
  width?: any;
  height?: any;
  quality?: number;
  className?: string;
  loading?: any;
  sizes?: string;
  fill?: any;
  objectFit?: 'cover' | 'contain';
  priority?: boolean;
}
interface PropsLoader extends ParamsProps {
  src: string;
}
const removeNull = (params: any) => {
  const obj: any = {};
  Object.keys(params).map((key: any) => {
    if (params[key]) obj[key] = params[key];
  });
  return obj;
};
const myLoader = ({ src, width, quality }: PropsLoader) => {
  const params: ParamsProps = removeNull({ width, quality });
  const qs = '?' + new URLSearchParams(params as any).toString();
  return process.env.CMS + '/assets/' + src + qs;
};

const MyImageWithLoader = (props: PropsLoader) => {
  return (
    <Image
      {...props}
      loader={myLoader}
      alt="Picture of the author"
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
};

export const MyImage = ({ src, ...props }: PropsLoader) => {
  const params: ParamsProps = removeNull({
    width: props.width,
    height: props.height,
    quality: 100,
  });
  const qs = '?' + new URLSearchParams(params as any).toString();
  const source = process.env.CMS + '/assets/' + src + qs;
  return (
    <Image
      src={source}
      // blurDataURL="/images/blur.jpeg"
      // placeholder="blur"
      {...props}
      alt="Picture of the author"
      style={{
        maxWidth: "100%",
        height: "auto"
      }} />
  );
};

export default MyImageWithLoader;
