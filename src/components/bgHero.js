import Image from "next/image";
import Link from "next/link";

const BgHero = ({ headline }) => {
  return (
    <div dir="rtl">
      <div className="relative w-full h-[578px] md:h-[90vh] lg:h-[476px]">
        <Image
          src="https://images.skynewsarabia.com/images/v1/2019/03/09/1234154/800/450/1-1234154.jpg"
          layout="fill"
          alt="خلفية"
          className="absolute inset-0 object-cover z-0"
        />
        <div className="relative flex flex-col justify-center items-center h-full z-10 text-center text-white">
          <h1 className="lg:text-5xl text-3xl font-bold mt-32">{headline}</h1>
          <p className="mt-4 text-lg">
            <Link href="/" className="hover:underline mx-2">
              الرئيسية
            </Link>
            | {headline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgHero;
