import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[400px] sm-[500px] l-[700px] xl-[800px] 2xl-[900px]">
      <Image
        src="https://www.gensh.in/wallpaper/genshin/genshin_02_4K.jpg"
        layout="fill"
        objectFit="cover"
      />

      {/* Position absolute to the div and not the whole page */}
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Where will you go?</p>
        <button className="text-red-400 bg-white px-10 py-4 text-center shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
}
