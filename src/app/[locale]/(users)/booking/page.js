
import React from "react";
import DoctorList from "@/src/components/Doctors/DoctorList";
import DoctorSearchClient from "@/src/components/Doctors/DoctorSearchClient";


export function generateMetadata() {

  return {
    title: "احجز استشارة | مستشارك الزراعي",
  };
}

export default function MainConsultantPage({ searchParams }) {
  const { searchTerm = "", category = "" } = searchParams || {};

  const fakeConsultants = [
    {
      doctorId: "1",
      profilePicture: "https://media.egyin.com/2024/7/large/17531635564634202407130336413641.jpg",
      firstName: "محمد",
      lastName: "علي",
      category: "مستشار زراعي",
      headLine: "خبير زراعي من جامعة طنطا",
      rating: 4.8,
      consultationPriceBeforeDiscount: 200,
      consultationPriceAfterDiscount: 150,
      isAvailable: true
    },
    {
      doctorId: "2",
      profilePicture: "https://media.egyin.com/2024/7/large/17531635564634202407130336413641.jpg",
      firstName: "أحمد",
      lastName: "حسين",
      category: "مستشار زراعي",
      headLine: "أستاذ زراعي بجامعة طنطا",
      rating: 4.5,
      consultationPriceBeforeDiscount: 180,
      consultationPriceAfterDiscount: 140,
      isAvailable: true
    },
    {
      doctorId: "3",
      profilePicture: "https://media.egyin.com/2024/7/large/17531635564634202407130336413641.jpg",
      firstName: "سامي",
      lastName: "فؤاد",
      category: "مستشار زراعي",
      headLine: "باحث في الزراعة بجامعة طنطا",
      rating: 4.2,
      consultationPriceBeforeDiscount: 220,
      consultationPriceAfterDiscount: 170,
      isAvailable: true
    },
    {
      doctorId: "4",
      profilePicture: "https://media.egyin.com/2024/7/large/17531635564634202407130336413641.jpg",
      firstName: "خالد",
      lastName: "مصطفى",
      category: "مستشار زراعي",
      headLine: "خبير زراعي ومستشار من جامعة طنطا",
      rating: 4.9,
      consultationPriceBeforeDiscount: 250,
      consultationPriceAfterDiscount: 200,
      isAvailable: true
    }
  ];

  const searchTerms = searchTerm.trim().toLowerCase().split(' ');
  const filteredConsultants = fakeConsultants.filter(consultant =>
    consultant.isAvailable &&
    (category ? consultant.category.trim().toLowerCase() === category.trim().toLowerCase() : true) &&
    (searchTerm ? (
      searchTerms.every(term =>
        consultant.firstName.toLowerCase().includes(term) ||
        consultant.lastName.toLowerCase().includes(term) ||
        consultant.category.toLowerCase().includes(term)
      )
    ) : true)
  );

  const initialConsultantList = filteredConsultants.slice(0, 12);

  
  return (
    <div className="mt-14 md:mt-5 lg:-mt-5 pb-3">
      <div className="xl:mx-[7%] mx-10 m-auto">
        <DoctorSearchClient searchTerm={searchTerm} category={category} />
        <DoctorList doctorList={initialConsultantList} />
      </div>
    </div>
  );
}
