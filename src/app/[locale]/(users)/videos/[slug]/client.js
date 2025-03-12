"use client";

import { useState } from "react";
import YouTube from "react-youtube";
import Head from "next/head";
import { Link } from "@/src/i18n/routing";

// Static related videos for demonstration
const staticRelatedVideos = [
  {
    youtubeLink: {
      id: "videoid1",
      title: "فيديو زراعي 1",
      url: "https://www.youtube.com/watch?v=videoid1",
    },
  },
  {
    youtubeLink: {
      id: "videoid2",
      title: "فيديو زراعي 2",
      url: "https://www.youtube.com/watch?v=videoid2",
    },
  },
  {
    youtubeLink: {
      id: "videoid3",
      title: "فيديو زراعي 3",
      url: "https://www.youtube.com/watch?v=videoid3",
    },
  },
];

const VideoPageClient = ({ initialVideoDetails }) => {
  const [videoDetails] = useState(initialVideoDetails);
  const [tags] = useState(initialVideoDetails.tags || []);
  const [relatedVideos] = useState(staticRelatedVideos);
  const [isLoading] = useState(false);

  const extractVideoId = (url) => {
    try {
      const urlParams = new URLSearchParams(new URL(url).search);
      return urlParams.get("v");
    } catch (error) {
      console.error("Error extracting video ID:", error);
      return null;
    }
  };

  const videoOptions = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  if (isLoading) {
    return (
      <div className="lg:w-[70%] px-4 w-full m-auto bg-white mt-5">
        {/* Loading skeleton here if needed */}
        <p>جاري التحميل...</p>
      </div>
    );
  }

  if (!videoDetails) {
    return (
      <div className="flex justify-center bg-slate-300 items-center tajawal-bold text-5xl">
        <div className="w-[70%] h-[400px] bg-neutral-300 flex justify-center items-center">
          تفاصيل الفيديو غير صالحة
        </div>
      </div>
    );
  }

  const { title, description, url } = videoDetails;
  const videoId = extractVideoId(url);
  const firstNonFeaturedTagName = tags.find((tag) => tag.name !== "featured")?.name || "";

  return (
    <div className="lg:w-[70%] px-4 w-full m-auto bg-white mt-5">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
        <meta property="og:video" content={`https://www.youtube.com/watch?v=${videoId}`} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1000" />
        <meta property="og:video:height" content="520" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:video" content={`https://www.youtube.com/watch?v=${videoId}`} />
      </Head>

      <div className="flex flex-col md:flex-row -my-3 md:my-0 md:gap-4 justify-between md:items-center p-2">
        <h1 style={{ color: "rgb(52 146 150)" }} className="tajawal-extrabold text-2xl lg:text-3xl">
          {title}
        </h1>
        {tags.length > 0 && (
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Link href="/" key={tag.id}>
                <span className="tajawal-medium md:text-lg text-sm underline text-accent hidden md:block">
                  {tag.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 md:gap-10 mt-5 text-slate-500 items-center">
          <p>{description}</p>
          <div className="youtube-video-container w-full h-[240px] md:h-[520px] xl:h-[calc(100vh-250px)]">
            <YouTube className="youtube-video w-full h-full" videoId={videoId} opts={videoOptions} />
          </div>
        </div>
        <Link href="/booking" className="text-accent tajawal-bold px-2 text-sm md:text-base hover:underline">
             احجز استشارة مع افضل الخبراء الزراعيين الان
        </Link>
      </div>

      {/* Related Videos Section */}
      <div className="text-accent mt-16 m-auto w-full flex flex-col">
        <h1 className="md:pb-4 md:mx-10 mx-7 mb-5 text-sm md:text-base">فيديوهات مشابهة:</h1>
        <div className="flex justify-center items-center flex-col md:flex-row flex-wrap gap-5 md:gap-10 w-full relative">
          {relatedVideos.length > 0 ? (
            relatedVideos.map((relatedVideo, index) => (
              <div
                key={index}
                className="group flex flex-col border-[2px] cursor-pointer hover:border-primary transition-all ease-in-out hover:shadow-sm rounded-lg p-3 h-full w-[320px]"
              >
                <div className="relative w-full h-56">
                  <YouTube
                    className="youtube-video w-full h-full object-contain object-top group-hover:scale-105 transition-all ease duration-300"
                    videoId={extractVideoId(relatedVideo.youtubeLink.url)}
                    opts={{ width: "100%", height: "100%", playerVars: { autoplay: 0 } }}
                  />
                </div>
                <div className="flex flex-col w-full mt-2 flex-grow">
                  <h2 className="font-semibold capitalize text-base sm:text-lg line-clamp-2 h-14 overflow-hidden">
                    <span className="bg-gradient-to-r from-primary/50 to-primary/50 text-black bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                      {relatedVideo.youtubeLink.title}
                    </span>
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p>لا توجد فيديوهات مشابهة لعرضها.</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Link href="/categories">
            <button className="bg-accent text-white p-4 px-14 tajawal-bold hover:scale-105 transition-all duration-200 rounded-md cursor-pointer font-bold mt-10">
              المزيد
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoPageClient;
