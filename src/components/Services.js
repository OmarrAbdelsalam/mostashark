// OurServices.jsx
import {
    FaSeedling,
    FaTree,
    FaWater,
    FaTractor,
    FaLeaf,
    FaBug,
    FaRegSun
  } from "react-icons/fa";
  import Card from "./Card";
  
  const OurServices = () => {
    return (
      <div className="bg-white" dir="rtl">
        <div className="flex items-center flex-col">
          <h1 className="text-dark text-3xl mx-3 text-center md:mt-20 font-bold mb-5">
            خدماتنا الزراعية
          </h1>
          <p className="text-gray-500 text-center mx-4">
            نوفر حلولاً متكاملة لكل احتياجاتك الزراعية والبيئية. هدفنا هو جعل الزراعة
            أكثر استدامة وربحية.
          </p>
        </div>
  
        <div className="p-4 pt-12 pb-20">
          <div className="grid gap-8 mx-4 md:mx-10 lg:mx-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card
              icon={<FaSeedling size={48} color="white" />}
              title="تركيب الحدائق"
              paragraph="نصمم ونركّب الحدائق بأحدث التقنيات لتلبية احتياجاتك والحفاظ على البيئة."
              link="/"
            />
  
            <Card
              icon={<FaWater size={48} color="white" />}
              title="أنظمة الري الحديثة"
              paragraph="نوفّر وتركيب أنظمة الري بالتنقيط والرش وغيرها لضمان استخدام فعّال للمياه."
              link="/irrigation-systems"
            />
  
            <Card
              icon={<FaLeaf size={48} color="white" />}
              title="تشذيب الأشجار"
              paragraph="نساعدك في تشذيب الأشجار بشكل صحيح للمحافظة على صحتها وتقليل المخاطر."
              link="/tree-pruning"
            />
  
            <Card
              icon={<FaTractor size={48} color="white" />}
              title="الاستشارات الزراعية"
              paragraph="نوفر استشارات متخصصة للمزارعين والمستثمرين لتحقيق أفضل نتائج زراعية."
              link="/agricultural-consulting"
            />
  
            {/* If you want a "regular" sun icon, use FaRegSun. Otherwise, you can use FaSun. */}
            <Card
              icon={<FaRegSun size={48} color="white" />}
              title="الزراعة العضوية"
              paragraph="نقدّم حلولاً للزراعة العضوية تحافظ على البيئة وتضمن منتجات صحية وطبيعية."
              link="/organic-farming"
            />
  
            <Card
              icon={<FaBug size={48} color="white" />}
              title="مكافحة الآفات الزراعية"
              paragraph="نستخدم أحدث الطرق والمواد الآمنة لمكافحة الآفات وضمان استدامة المحاصيل."
              link="/pest-control"
            />
  
            <Card
              icon={<FaTree size={48} color="white" />}
              title="الخدمات البيئية"
              paragraph="نوفر حلولاً مبتكرة للحفاظ على التنوع الحيوي وتحسين جودة التربة والهواء."
              link="/environmental-services"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default OurServices;