import { Metadata } from "next";
import { Code } from "@/types/code";
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
  const lang= params.lang;
  const data = dict[params.hotel];
  const codeTions: Code[] = data.all_data;

  return (
    <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">

      <div className="relative isolate overflow-hidden  px-2 py-12  sm:rounded-3xl sm:px-14 xl:py-12">
        <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-primary sm:text-6xl">
          {data.title}
        </h1>
        <p className="mx-auto mt-2 px-4 max-w-xl text-center text-xl leading-8 text-gray-300">
          {data.des}
        </p>

        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
          <script async data-cfasync="false" src="//dustinga.com/d1472120778daf83cc623354618f95b3/invoke.js"></script>
          <div id="container-d1472120778daf83cc623354618f95b3"></div>
        </div>
       

        <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className=" border">
                <tr>
                  <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                  Company
                  </th>
                  <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                  Hotel
                  </th>
                  <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                  Corporate Code
                  </th>
                  <th scope="col" className="text-sm font-medium  px-6 py-4 text-left">
                  view
                  </th>
                </tr>
              </thead>
              <tbody>       
              {codeTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className=" border">
                      <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      {tab.Company}
                      </td>
                      <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      {tab.Hotel}
                      </td>
                      <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      {tab.Corporate_Code}
                      </td>
                      <td className="text-sm  font-light px-6 py-4 whitespace-nowrap">
                      <a href={`/${lang}/detail/${params.hotel}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
               ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
        

      </div>

    </div>
  );
}
