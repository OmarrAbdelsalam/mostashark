import CoverSection from '@/src/components/VideoHome/CoverSection';
import RecentPosts from '@/src/components/VideoHome/RecentPosts';

export const metadata = {
  metadataBase: new URL('https://2l2ana.com'),
  title: 'فيديوهات طبية | قلقانة',
  description: 'شاهد الفيديوهات الطبية واحصل على معلومات مفيدة. تشمل المواضيع: فيديو متكرر',
  keywords: "حجز دكتور, فيديوهات طبية, استشارة طبية, نصائح طبية, استفسارات صحية, دكتور اونلاين, دكتور عبر الإنترنت, حجز استشارة طبية, فيديو طبي, طبيب استشاري, نصيحة طبية, استفسار طبي, حجز موعد مع دكتور, استشارة دكتور, نصائح صحية, طبيب متخصص, استفسارات طبية شائعة, book doctor, medical videos, doctor consultation, medical advice, health queries, online doctor, doctor appointment, medical consultation, medical videos, professional medical advice",
  author: 'قلقانة',
  openGraph: {
    title: 'فيديوهات طبية | قلقانة',
    description: 'شاهد الفيديوهات الطبية واحصل على معلومات مفيدة. (فيديو ثابت 6 مرات)',
    type: 'website',
    url: 'https://2l2ana.com/videos',
    images: [
      {
        url: 'https://2l2ana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile-imgr.9825690a.png&w=1080&q=75',
        width: 800,
        height: 600,
        alt: 'فيديوهات طبية',
      },
    ],
  },
};

const VideosPage = () => {
  const allVideos = Array(6).fill({
    youtubeLink: {
      url: 'https://www.youtube.com/watch?v=A6uP96e0GTU',
      title: 'انواع الاستثمار الزراعي ',
      tags: ["زراعة"],
    },
  });


  const coverVideo = allVideos[0];
  const recentVideos = allVideos;

  return (
    <div className='mt-5'>
      <div className="flex flex-col items-center justify-center lg:w-[85%] m-auto">
        <CoverSection video={coverVideo} />
        <RecentPosts videos={recentVideos} />
      </div>
    </div>
  );
};

export default VideosPage;
