import Hero from "./_components/hero";
import HomeGuide from "./_components/homeGuide";
import { Metadata } from "next";
import Tab from "./_components/tab";
//import Right from "./_components/right";

//import Videos from "./_components/videos";
import { getDictionary } from "@/services/i18n";
//import { getLatestVideos } from "@/models/video";
export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);

  return {
    title: dict.brand.title,
    description: dict.brand.sub_title,
    alternates: {
      canonical: `https://corporate-codes.online/${params.lang}`,
    },
  };
}

export default async function ({ params }: { params: { lang: string } }) {
  //const videos = await getLatestVideos(1, 50);
  const dict = await getDictionary(params.lang);

  return (
    <div className="relative isolate overflow-hidden  px-2 py-6  sm:rounded-3xl sm:px-24 xl:py-6">
  
        <Hero dict={dict} />
        <Tab lang={params.lang} dict={dict} cate="latest" />
        <HomeGuide dict={dict} />

       
      </div>
  );
}
