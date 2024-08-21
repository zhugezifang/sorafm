'use client';

import Hero from "./_components/hero";
import { Metadata } from "next";
import Tab from "./_components/tab";
import Right from "./_components/right";

//import Videos from "./_components/videos";
import { getDictionary } from "@/services/i18n";
//import { getLatestVideos } from "@/models/video";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    alternates: {
      canonical: `${process.env.WEB_BASE_URI}/${params.lang}`,
    },
  };
}

export default async function ({ params }: { params: { lang: string } }) {
  //const videos = await getLatestVideos(1, 50);
  const dict = await getDictionary(params.lang);

  return (
    <div className="flex flex-col md:flex-row">
  
        <div className="md:flex-1">
        <Hero dict={dict} />
        <Tab lang={params.lang} dict={dict} cate="latest" />
        </div>
        
        
        <div className="md:w-1/5">
          <Right lang={params.lang} dict={dict} />
        </div>
      </div>
  );
}
