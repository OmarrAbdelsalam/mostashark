import CoverSection from "@/src/components/BlogHome/CoverSection";
import RecentPosts from "@/src/components/BlogHome/RecentPosts";

const FAKE_BLOGS = [
  {
    id: "1",
    title: "أهمية التربية الحيوانية في تطوير المجتمعات",
    publishedAt: "2025-01-01",
    image: {
      filePath: "https://via.placeholder.com/800x600.png?text=Blog+1",
      blurhashDataUrl: "",
      width: 800,
      height: 600,
    },
    tags: ["تربية حيوانية"],
    url: "/blogs/animal-husbandry",
  },
  {
    id: "2",
    title: "دور الزراعة العضوية في تأمين الغذاء الصحي",
    publishedAt: "2025-01-05",
    image: {
      filePath: "https://via.placeholder.com/800x600.png?text=Blog+2",
      blurhashDataUrl: "",
      width: 800,
      height: 600,
    },
    tags: ["زراعة عضوية"],
    url: "/blogs/organic-farming",
  },
  {
    id: "3",
    title: "الري الحديث والتقنيات المبتكرة في زيادة الإنتاج",
    publishedAt: "2025-01-10",
    image: {
      filePath: "https://via.placeholder.com/800x600.png?text=Blog+3",
      blurhashDataUrl: "",
      width: 800,
      height: 600,
    },
    tags: ["ري حديث"],
    url: "/blogs/modern-irrigation",
  },
  {
    id: "4",
    title: "الزراعة الحضرية: مستقبل المدن المستدامة",
    publishedAt: "2025-01-15",
    image: {
      filePath: "https://via.placeholder.com/800x600.png?text=Blog+4",
      blurhashDataUrl: "",
      width: 800,
      height: 600,
    },
    tags: ["زراعة حضرية"],
    url: "/blogs/urban-agriculture",
  },
  {
    id: "5",
    title: "الحفاظ على التنوع البيولوجي الحيواني",
    publishedAt: "2025-01-20",
    image: {
      filePath: "https://via.placeholder.com/800x600.png?text=Blog+5",
      blurhashDataUrl: "",
      width: 800,
      height: 600,
    },
    tags: [ "حيوانات"],
    url: "/blogs/animal-biodiversity",
  },
  {
    id: "6",
    title: "التسمين الحيواني وأساليب الرعاية الحديثة",
    publishedAt: "2025-01-25",
    image: {
      filePath: "https://via.placeholder.com/800x600.png?text=Blog+6",
      blurhashDataUrl: "",
      width: 800,
      height: 600,
    },
    tags: ["تسمين حيواني"],
    url: "/blogs/animal-fattening",
  },
];

export function generateMetadata() {
  const titles = FAKE_BLOGS.map((blog) => blog.title).join(", ");

  return {
    title: "مقالات زراعية | مستشارك الزراعي",
  };
}

const BlogPage = () => {

  const coverBlog = FAKE_BLOGS[0];
  const blogs = FAKE_BLOGS;

  return (
    <div className="md:mt-6">
      <div className="flex flex-col items-center lg:w-[83%] m-auto justify-center">
        <CoverSection blog={coverBlog} />
        <RecentPosts blogs={blogs} />
      </div>
    </div>
  );
};

export default BlogPage;
