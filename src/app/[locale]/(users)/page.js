import HeroDoctor from "@/src/components/Doctors/HeroDoctor";

export async function generateMetadata() {
  return {
    title: `مستشارك الزراعي   `,
  };
}



 

export default async function Home() {

  return (
    <main className="flex flex-col md:-mt-5 lg:mt-0 -mt-5  items-center justify-center">
      <HeroDoctor />
    </main>
  );
}
