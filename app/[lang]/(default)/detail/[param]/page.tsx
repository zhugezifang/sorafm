import { Metadata } from "next";
import { Code } from "@/types/code";
import { getDictionary } from "@/services/i18n";
import Copy from "../../_components/copy";

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { lang: string; param: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  const hotel = params.param.split('_')[0];
  const company = params.param.split('_')[1];
  const code = params.param.split('_')[2];
  const data = dict[hotel];
  return {
    title:`${hotel} ${company} ${dict.daima}`,
    description: `${hotel} ${company} ${dict.daima}`,
  };
}

export default async function ({
  params,
}: {
  params: { lang: string; param: string };
}) {
  const dict = await getDictionary(params.lang);
  const lang= params.lang;
  const hotel = params.param.split('_')[0];
  const company = params.param.split('_')[1];
  const code = params.param.split('_')[2];

  const data = dict[hotel];
  const codeTions: Code[] = data.all_data;

  return (
    <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">

      <div className="relative isolate overflow-hidden bg-gray-900 px-2 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-6">

        <h1 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-primary">
          {hotel} {company} {dict.daima}
        </h1>

        <Copy code={code} copy={dict.copy} daima={dict.daima}/>

      </div>

      <div className="relative isolate overflow-hidden bg-gray-900 px-2 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-6">

        <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold tracking-tight text-primary">
          {data.title}
        </h2>

        <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
          <script async data-cfasync="false" src="//dustinga.com/d1472120778daf83cc623354618f95b3/invoke.js"></script>
          <div id="container-d1472120778daf83cc623354618f95b3"></div>
        </div>
       

        <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Company
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Hotel
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Corporate Code
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  view
                  </th>
                </tr>
              </thead>
              <tbody>       
              {codeTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tab.Company}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tab.Hotel}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {tab.Corporate_Code}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <a href={`/${lang}/detail/${tab.Hotel}_${tab.Company}_${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
               ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
        
        <div className="bg-gray-700 flex flex-wrap mt-4 p-2">

        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Hilton.url}`} className="inline-block max-w-full">
            {dict.Hilton.title}
            </a>
        </div>    
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Marriott.url}`} className="inline-block max-w-full">
            {dict.Marriott.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Hyatt.url}`} className="inline-block max-w-full">
            {dict.Hyatt.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.IHG.url}`} className="inline-block max-w-full">
            {dict.IHG.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Western.url}`} className="inline-block max-w-full">
            {dict.Western.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Choice.url}`} className="inline-block max-w-full">
            {dict.Choice.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Omni.url}`} className="inline-block max-w-full">
            {dict.Omni.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Accor.url}`} className="inline-block max-w-full">
            {dict.Accor.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Wyndham.url}`} className="inline-block max-w-full">
            {dict.Wyndham.title}
            </a>
        </div>
        <div className="text-white p-2">
            <a href={`/${lang}/${dict.Radisson.url}`} className="inline-block max-w-full">
            {dict.Radisson.title}
            </a>
        </div>
      </div>

      </div>

      

    </div>
  );
}
