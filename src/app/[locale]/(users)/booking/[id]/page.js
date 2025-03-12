
import Details from "@/src/components/Doctors/DoctorDetails";
import SuggestionList from "@/src/components/Doctors/DoctorSuggestionList";

const staticConsultant = {
  id: "1",
  name: "أ. أحمد الزراعي",
  category: "الزراعة المستدامة",
  headLine: "مستشار زراعي ذو خبرة في تحسين المحاصيل وإدارة المزارع",
  rating: 4.8,
  consultationPriceBeforeDiscount: 200,
  consultationPriceAfterDiscount: 150,
  description:
    "يقدم أ. أحمد استشارات زراعية متخصصة لمساعدة المزارعين على تحقيق أفضل إنتاجية ممكنة.",
  imageUrl: "/consultantImage.jpg", // تأكد من وجود الصورة في مجلد public أو قم بتعديل المسار
  consultantId: "1",
  timesRanges: ["9:00", "10:00", "11:00"],
};

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL("https://2l2ana.com"),
    title: `قلقانة | ${staticConsultant.name}`,
    description:
      staticConsultant.description ||
      "احصل على استشارة زراعية من أفضل المستشارين الزراعيين.",
    keywords:
      "تفاصيل المستشار, استشارة زراعية, مستشار زراعي, حجز استشارة, معلومات المستشار",
    author: "قلقانة",
    openGraph: {
      title: `تفاصيل المستشار | ${staticConsultant.name}`,
      description:
        staticConsultant.description ||
        "احصل على استشارة زراعية من أفضل المستشارين الزراعيين.",
      type: "profile",
      url: `https://2l2ana.com/consultant/${staticConsultant.id}`,
      images: [
        {
          url: staticConsultant.imageUrl || "default-image-url.jpg",
          width: 800,
          height: 600,
          alt: staticConsultant.name || "المستشار",
        },
      ],
    },
  };
}

const ConsultantDetailsPage = async ({ params }) => {
  return (
    <div dir="rtl" className="p-5 -mt-5 md:mt-0 md:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-9 gap-5">
        <div className="lg:col-span-6 mb-10">
          <Details consultant={staticConsultant} />
        </div>
        <div className="lg:col-span-3 lg:mx-5 m-auto mt-5 lg:min-w-[370px] w-full">
          <SuggestionList />
        </div>
      </div>
    </div>
  );
};

export default ConsultantDetailsPage;
