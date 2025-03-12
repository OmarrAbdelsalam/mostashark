import VideoPageClient from "./client";

export async function generateMetadata({ params }) {
  // Static video details for the provided link.
  const staticVideoDetails = {
    id: "debdQ7ito0Y",
    title: "عنوان الفيديو الثابت",
    description: "هذا هو وصف الفيديو الثابت للفيديو الزراعي.",
    url: "https://www.youtube.com/watch?v=debdQ7ito0Y",
    tags: [{ id: "1", name: "زراعي" }],
  };

  return {
    title: `${staticVideoDetails.title} | مستشارك الزراعي`,
  };
}

const VideoPage = async ({ params }) => {
  const staticVideoDetails = {
    id: "debdQ7ito0Y",
    title: "عنوان الفيديو الثابت",
    description: "هذا هو وصف الفيديو الثابت للفيديو الزراعي.",
    url: "https://www.youtube.com/watch?v=debdQ7ito0Y",
    tags: [{ id: "1", name: "زراعي" }],
  };

  return (
    <div dir="rtl">
      <VideoPageClient initialVideoDetails={staticVideoDetails} />
    </div>
  );
};

export default VideoPage;
