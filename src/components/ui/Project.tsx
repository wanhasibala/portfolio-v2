import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  setModal: any;
  year: string;
  index: number;
  href: string;
  src: string;
}
export default function Project({
  title,
  setModal,
  year,
  index,
  href,
  src,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="flex flex-col w-full py-12 px-4 lg:px-12 lg:hover:px-8 border-t cursor-pointer transition-all duration-200 lg:hover:opacity-50 gap-6"
    >
      <div className="flex w-full justify-between items-center ">
        <h2 className="text-heading-4 font-normal duration-500 ">{title}</h2>
        <h1 className="duration-500 font-light ">{year}</h1>
      </div>
      <div className="block lg:hidden">
        <img src={src}  alt="image" className="w-full aspect-video rounded-lg md:rounded-[20px] object-cover"/>
      </div>
    </Link>
  );
}
