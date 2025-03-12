import Image from "next/image";
import { Link } from '@/src/i18n/routing';
import avatar from "@/public/noavatar.png";
import StaticStarRating from "../Booking/StaticStarRating";

const staticConsultants = [
  {
    consultantId: "1",
    profilePicture: avatar.src,
    category: "استشارات زراعية",
    firstName: "أحمد",
    lastName: "محمد",
    rating: 4.8,
    consultationPriceAfterDiscount: 150,
  },
  {
    consultantId: "2",
    profilePicture: avatar.src,
    category: "استشارات زراعية",
    firstName: "سارة",
    lastName: "ياسر",
    rating: 4.5,
    consultationPriceAfterDiscount: 130,
  },
  {
    consultantId: "3",
    profilePicture: avatar.src,
    category: "استشارات زراعية",
    firstName: "خالد",
    lastName: "ابراهيم",
    rating: 4.2,
    consultationPriceAfterDiscount: 170,
  },
  {
    consultantId: "4",
    profilePicture: avatar.src,
    category: "استشارات زراعية",
    firstName: "منى",
    lastName: "ذكي",
    rating: 4.9,
    consultationPriceAfterDiscount: 140,
  },
];

const SuggestionList = ({ blog }) => {
  const roundRating = (rating) => {
    if (rating > 4.59) return 5;
    if (rating >= 4.2 && rating <= 4.59) return 4.5;
    if (rating >= 3.6 && rating < 4.2) return 4;
    if (rating >= 3.2 && rating < 3.6) return 3.5;
    if (rating >= 2.6 && rating < 3.2) return 3;
    if (rating >= 2.2 && rating < 2.6) return 2.5;
    if (rating >= 1.6 && rating < 2.2) return 2;
    if (rating >= 1.2 && rating < 1.6) return 1.5;
    if (rating >= 0.6 && rating < 1.2) return 1;
    return 5;
  };

  const consultants = staticConsultants;

  return (
    <div className="pt-4 px-4 border-[1px] lg:mx-5 rounded-lg">
      {blog ? (
        <Link href="/booking-Consultant">
          <h1 className="mb-3 md:text-2xl text-lg tajawal-medium text-primary">مستشار زراعي اونلاين ؟</h1>
          <p className="text-gray-500 text-sm md:text-base tajawal-regular">
            اطمن على مزرعتك من بيتك مع أفضل المستشارين الزراعيين في الوطن العربي <span className="text-accent">من هنا</span>
          </p>
        </Link>
      ) : (
        <div className="flex items-center mx-3 m-auto justify-between">
          <h1 className="mb-3 text-lg md:text-xl tajawal-medium text-primary">اقتراحات</h1>
          <Link href="/booking-Consultant" className="mb-3 text-sm md:text-base tajawal-medium text-accent hover:underline">
            المزيد
          </Link>
        </div>
      )}

      {consultants.length === 0 ? (
        [...Array(4)].map((_, index) => (
          <div key={index} className="cursor-pointer p-4 hover:bg-slate-100 rounded-lg flex items-center gap-3 animate-pulse">
            <div className="w-[70px] h-[70px] rounded-full bg-gray-300 mr-5" />
            <div className="mt-3 p-1 px-2 flex flex-col gap-2 w-full">
              <div className="bg-gray-300 px-2 p-1 rounded-full text-[10px] w-1/2 h-4" />
              <div className="bg-gray-300 h-6 rounded w-3/4" />
              <div className="flex items-center w-full justify-between">
                <div className="bg-gray-300 h-4 rounded w-1/4" />
                <div className="bg-gray-300 h-4 rounded w-1/3" />
              </div>
            </div>
          </div>
        ))
      ) : (
        consultants.slice(0, 4).map((consultant) => (
          <Link
            key={consultant.consultantId}
            href={`/booking-Consultant/${consultant.consultantId}`}
            className="cursor-pointer p-1 px-2 xl:p-4 md:p-4 lg:p-1 hover:bg-slate-100 rounded-lg flex items-center gap-3"
          >
            <Image
              src={consultant.profilePicture}
              alt="صورة المستشار"
              width={200}
              height={200}
              className="w-[60px] h-[80px] md:w-[70px] md:h-[100px] rounded-lg mr-5"
              unoptimized={true}
            />
            <div className="mt-3 p-1 px-2 flex flex-col gap-2 w-full">
              <h2 className="tajawal-bold text-primary bg-teal-100 px-2 p-1 rounded-full text-[10px] w-fit">
                {consultant.category}
              </h2>
              <h2 className="tajawal-medium md:text-lg">
                {consultant.firstName} {consultant.lastName}
              </h2>
              <div className="flex items-center w-full justify-between">
                <StaticStarRating rating={roundRating(consultant.rating)} size={20} />
                <h2 className="tajawal-regular text-gray-500 flex gap-2 text-sm">
                  الكشف : {consultant.consultationPriceAfterDiscount} ج
                </h2>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SuggestionList;
