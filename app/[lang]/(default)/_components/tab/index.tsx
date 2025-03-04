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
    <>
    <div className="my-10">
        <h2 className="text-3xl text-center font-bold mb-10">{dict.title}</h2>
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
        gap-4 sm:gap-6 lg:gap-6
        justify-items-center">
          <a href={`/${lang}/${dict.Hilton.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/hilton.png" alt="Hilton Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <symbol id="ai:ic:twotone-discount">
                    <path fill="currentColor" d="M19 9.79L11.21 2H5v6.21L12.79 16zM7.25 5.5a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5" opacity=".3"></path>
                    <path fill="currentColor" d="M12.79 21L3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83z"></path>
                    <path fill="currentColor" d="M11.38 17.41c.39.39.9.59 1.41.59s1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83L12.62.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41zM5 2h6.21L19 9.79L12.79 16L5 8.21z"></path>
                    <circle cx="7.25" cy="4.25" r="1.25" fill="currentColor"></circle>
                  </symbol>
                  <use></use>
                </svg>
                <span>25% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Hilton.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.Marriott.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/marriott.png" alt="Marriott Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>22% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Marriott.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.Hyatt.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/hyatt.png" alt="Hyatt Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>16% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Hyatt.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.IHG.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/ihg.png" alt="IHG Hotels Group logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>20% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.IHG.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.Western.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/best-western.png" alt="Best Western Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>23% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Western.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.Choice.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/choice-hotels.png" alt="Choice Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>19% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Choice.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.Omni.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/omni.jpg" alt="Omni Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>20% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Omni.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.Wyndham.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/wyndham.png" alt="Wyndham Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>23% off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Wyndham.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
          <a href={`/${lang}/${dict.Radisson.url}`} className="block w-52 min-w-[128px] max-w-sm bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="relative h-36">
              <img src="/images/radisson.png" alt="Radisson Hotels logo" className="w-full h-full object-cover"/>
              <div className="absolute top-2 left-2 border-2 border-gray-300 bg-white text-gray-800 px-4 py-1 text-sm flex items-center rounded-full">
                <svg width="1em" height="1em" viewBox="0 0 24 24" className="w-4 h-4 mr-1 text-emerald-600" data-icon="ic:twotone-discount">
                  <use></use>
                </svg>
                <span>16%off</span></div>
            </div>
            <div className="p-2">
              <h3 className="font-semibold text-base text-gray-800 mb-1 truncate">{dict.Radisson.t0}</h3>
              <span className="inline-block bg-gray-200 text-gray-400 px-4 py-1 text-xs rounded-full whitespace-nowrap">{dict.brand.name} &gt;</span></div>
          </a>
        </div>
    </div>

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
    </>
    
  );
}
