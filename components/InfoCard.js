import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div
      // firs: applies only to first child
      className="flex py-7 px-2 pr-4 border-b cursor-pointer 
    hover:opacity-80 hover:shadow-lg transition duration-200 ease-out
    first:border-t"
    >
      <div className="relative w-40 h-32 md:w-80 md:h-52 flex-shrink-0">
        {/* cover: zoom in instead of stretch */}
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        {/* short line */}
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>

          <div className="flex flex-col">
            <p className="text-lg lg:text-2xl font-semibold pl-2 md:pb-2 md:pl-0">
              {price}
            </p>

            <p className="hidden md:inline-flex text-right font-extralight">
              {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
