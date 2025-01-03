'use client';

import { Code } from "@/types/code";
import Content from "../content";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ({
  lang,
  dict,
  cate,
}: {
  lang: string;
  dict: any;
  cate: string;
}) {

  const HiltonTions: Code[] = dict.Hilton.data;
  const MarriottTions: Code[] = dict.Marriott.data;
  const HyattTions: Code[] = dict.Hyatt.data;
  const IHGTions: Code[] = dict.IHG.data;
  const WesternTions: Code[] = dict.Western.data;
  const ChoiceTions: Code[] = dict.Choice.data;
  const OmniTions: Code[] = dict.Omni.data;
  const accorTions: Code[] = dict.Accor.data;
  const WyndhamTions: Code[] = dict.Wyndham.data;
  const RadissonTions: Code[] = dict.Radisson.data;

  return (
    <div className="mx-auto mt-8 mb-0">
     <div className="relative isolate overflow-hidden px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold">{dict.Hilton.title}</h2>
      <a href={`/${lang}/${dict.Hilton.url}`} className="hover:text-blue-700">{dict.Hilton.more}</a>
     </div>
     
     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {HiltonTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Hilton.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="py-4 px-4 mx-auto max-w-screen-xl sm:py-6 lg:px-6">
        <script async data-cfasync="false" src="//dustinga.com/d1472120778daf83cc623354618f95b3/invoke.js"></script>
        <div id="container-d1472120778daf83cc623354618f95b3"></div>
     </div>

     <div className="relative isolate overflow-hidden px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Marriott.title}</h2>
      <a href={`/${lang}/${dict.Marriott.url}`} className=" hover:text-blue-700">{dict.Marriott.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {MarriottTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Marriott.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Hyatt.title}</h2>
      <a href={`/${lang}/${dict.Hyatt.url}`} className=" hover:text-blue-700">{dict.Hyatt.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {HyattTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Hyatt.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.IHG.title}</h2>
      <a href={`/${lang}/${dict.IHG.url}`} className=" hover:text-blue-700">{dict.IHG.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {IHGTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Hyatt.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Western.title}</h2>
      <a href={`/${lang}/${dict.Western.url}`} className=" hover:text-blue-700">{dict.Western.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {WesternTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Western.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Choice.title}</h2>
      <a href={`/${lang}/${dict.Choice.url}`} className=" hover:text-blue-700">{dict.Choice.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {ChoiceTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Choice.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Omni.title}</h2>
      <a href={`/${lang}/${dict.Omni.url}`} className=" hover:text-blue-700">{dict.Omni.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {OmniTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Omni.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Accor.title}</h2>
      <a href={`/${lang}/${dict.Accor.url}`} className=" hover:text-blue-700">{dict.Accor.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {accorTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Accor.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Wyndham.title}</h2>
      <a href={`/${lang}/${dict.Wyndham.url}`} className=" hover:text-blue-700">{dict.Wyndham.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {WyndhamTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Wyndham.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden  px-6 py-6  sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl  font-bold">{dict.Radisson.title}</h2>
      <a href={`/${lang}/${dict.Radisson.url}`} className=" hover:text-blue-700">{dict.Radisson.more}</a>
     </div>

     <div className="flex flex-col px-8">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border">
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
                  detail
                  </th>
                </tr>
              </thead>
              <tbody>
                  {RadissonTions.map((tab: Code, idx: number) => (
                    <tr key={idx} className="bg-white border">
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
                      <a href={`/${lang}/detail/${dict.Radisson.name}/${tab.Company}/${tab.Corporate_Code}`} className="text-blue-700">view</a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>
     
    <br/>
    <Content dict={dict} />
        <div className="bg-gray-100 flex flex-wrap mt-4 p-2">

          <div className="p-2">
              <a href={`/${lang}/${dict.Hilton.url}`} className="inline-block max-w-full">
              {dict.Hilton.title}
              </a>
          </div>    
          <div className="p-2">
              <a href={`/${lang}/${dict.Marriott.url}`} className="inline-block max-w-full">
              {dict.Marriott.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.Hyatt.url}`} className="inline-block max-w-full">
              {dict.Hyatt.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.IHG.url}`} className="inline-block max-w-full">
              {dict.IHG.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.Western.url}`} className="inline-block max-w-full">
              {dict.Western.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.Choice.url}`} className="inline-block max-w-full">
              {dict.Choice.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.Omni.url}`} className="inline-block max-w-full">
              {dict.Omni.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.Accor.url}`} className="inline-block max-w-full">
              {dict.Accor.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.Wyndham.url}`} className="inline-block max-w-full">
              {dict.Wyndham.title}
              </a>
          </div>
          <div className="p-2">
              <a href={`/${lang}/${dict.Radisson.url}`} className="inline-block max-w-full">
              {dict.Radisson.title}
              </a>
          </div>
        </div>
    </div>

    
  );
}
