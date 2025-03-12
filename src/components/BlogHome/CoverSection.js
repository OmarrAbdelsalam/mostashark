import Image from "next/image";
import { getTranslations } from 'next-intl/server'; // If you're using next-intl
import { Link } from '@/src/i18n/routing';
import Tag from "@/src/components/ELements/Tag";

const CoverSection = async () => {
  // Async translation function (if you're using next-intl)
  const t = await getTranslations('CoverSection');

  // Hardcoded "fake" blog data
  const blog = {
    id: "fake-blog-1",
    title: "موضوع زراعي ",
    tags: [{ name: "الزراعة" }, { name: "الحيوان" }],
    // The entire base64 string you provided goes here:
    imageUrl: "https://cdn.wikifarmer.com/images/detailed/2022/07/%D9%85%D8%A7-%D9%87%D9%8A-%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9-%D8%A7%D9%84%D8%A3%D8%AD%D8%A7%D8%AF%D9%8A%D8%A9.jpg",
  };

  return (
    <div className="w-full" dir="rtl">
      <h1
        className="text-3xl mx-4 mb-5 mt-2 md:hidden"
        style={{ color: "rgb(92, 194, 198)" }}
      >
        {t('articles') /* Localized title */}
      </h1>

      <article className="flex flex-col items-start mx-5 lg:w-[90%] lg:m-auto justify-end relative md:h-[80vh]">
        {/* Gradient overlay */}
        <div className="absolute right-0 top-0 left-0 bottom-0 bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0"></div>

        {/* Image (base64) */}
        {blog.imageUrl ? (
          <Image
            className="w-full h-full object-center object-cover rounded-3xl -z-10 border-4"
            alt={blog.title}
            src={blog.imageUrl}
            layout="fill"
            unoptimized={true}
          />
        ) : (
          // Fallback if no image
          <div className="w-full h-full bg-gray-200 rounded-3xl -z-10 border-4 flex items-center justify-center">
            <span>{t('noImageAvailable')}</span>
          </div>
        )}

        {/* Blog info */}
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 cursor-pointer text-light">
          <Tag name={blog.tags?.[0]?.name || t('uncategorized')} link="" />

          <Link href={`/blogs/${blog.id}`} className="mt-6">
            <h1 className="font-bold capitalize text-4xl">
              <span className="bg-gradient-to-r from-primary to-primary bg-[length:0px_5px] hover:bg-[length:100%_5px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>

          <p className="inline-block mt-4 text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default CoverSection;
