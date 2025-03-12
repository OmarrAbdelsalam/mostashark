import { useLocale, useTranslations } from 'next-intl';

const HeroDoctor = () => {
  const t = useTranslations('HeroDoctor');
  const locale = useLocale();

  return (
    <section 
      className="relative w-full md:-mt-20 -mt-3 bg-cover bg-center bg-no-repeat" 
      style={{
        backgroundImage:
          "url('https://thehill.com/wp-content/uploads/sites/2/2022/08/CA_farm_08222022istock.jpg?strip=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mx-auto w-full  max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto  w-full text-center py-10  rounded-xl text-white">
          <h1 className="text-3xl w-full tajawal-bold px-2 text-white rounded-full py-4 sm:text-5xl">
 خبرة 15 عام في المجال الزراعي         </h1>
 <p className="mt-4 text-slate-300 sm:text-xl/relaxed">
            يلعب الاستشاري الزراعي دوراً حيوياً في توجيه المزارعين ومربي الحيوانات 
            نحو أساليب مستدامة ومتطورة تعزز الإنتاج والجودة.
          </p>

        

          <div className="mt-8 flex flex-wrap justify-center  gap-4">
            <a
              className="block w-full tajawal-bold   bg-primary rounded-sm px-12 py-3 text-sm font-medium text-white shadow-sm hover:scale-105 transition-all duration-300 scale-110 focus:ring-3 focus:outline-hidden sm:w-auto"
              href="/ar/services"
            >
 تصفح الخدمات            </a>

          
          </div>
        </div> 
      </div>
    </section>
  );
};

export default HeroDoctor;
