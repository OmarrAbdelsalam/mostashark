import GoalPage from "@/src/components/AboutUs/GoalPage";

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://2l2ana.com'),
    title: `من نحن  `,

  };
}

const AboutUsPage = () => {
  return (
    <main className="pt-7 m-auto">
      <GoalPage/>

   

    </main>
  );
};

export default AboutUsPage;
