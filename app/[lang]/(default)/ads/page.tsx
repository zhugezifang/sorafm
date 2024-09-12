import { Metadata } from "next";
import { getDictionary } from "@/services/i18n";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { lang: string; hotel: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  const data = dict[params.hotel];
  return {
    title:`${data.title}——${dict.brand.title}`,
    description: `${data.des}`,
  };
}

export default async function ({
  params,
}: {
  params: { lang: string; hotel: string };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 pt-20 pb-6 mx-auto lg:gap-8 xl:gap-0 lg:py-6 lg:pt-28">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <div className="">
                            
                            <h1 className="text-gray-900 font-bold text-4xl">Corporate-Codes.online Advertising Terms and Conditions
                            </h1>
                            <hr/>

                            <p className="text-base leading-8 my-5 font-bold">
                                Affiliate Disclosure
                            </p>
                            <p className="text-base leading-8 my-5">
                                corporate-codes.online is a participant in an affiliate advertising program designed to provide a means for sites to earn advertising fees by promoting products and services. When you click on a link for a product or service, Domainnamelist.net may receive a small commission from your purchase.    
                            </p>
            
                            <p className="text-base leading-8 my-5">
                                The opinions presented on this website are those of our team of writers, who may occasionally express their personal views on the products. We strive to provide fair perspectives, and we would be grateful if you choose to make a purchase through our links.
                            </p>
                            
                        </div>
            
                    </div>
                </div>
            </div>
        </section>  
    </div>
  );
}
