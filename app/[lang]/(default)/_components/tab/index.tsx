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
  const WyndhamTions: Code[] = dict.Wyndham.data;
  const RadissonTions: Code[] = dict.Radisson.data;

  return (
    <div className="mx-auto mt-8 mb-0">
     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Hilton.title}</h2>
      <a href={`/${lang}/${dict.Hilton.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {HiltonTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Marriott.title}</h2>
      <a href={`/${lang}/${dict.Marriott.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {MarriottTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Hyatt.title}</h2>
      <a href={`/${lang}/${dict.Hyatt.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {HyattTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.IHG.title}</h2>
      <a href={`/${lang}/${dict.IHG.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {IHGTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Western.title}</h2>
      <a href={`/${lang}/${dict.Western.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {WesternTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Choice.title}</h2>
      <a href={`/${lang}/${dict.Choice.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {ChoiceTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Omni.title}</h2>
      <a href={`/${lang}/${dict.Omni.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {OmniTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Wyndham.title}</h2>
      <a href={`/${lang}/${dict.Wyndham.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {WyndhamTions.map((tab: Code, idx: number) => (
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
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
     </div>

     <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
      <h2 className="text-2xl text-white font-bold">{dict.Radisson.title}</h2>
      <a href={`/${lang}/${dict.Radisson.url}`} className="text-white hover:text-blue-700">More Corporate Codes</a>
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
                </tr>
              </thead>
              <tbody>
                  {RadissonTions.map((tab: Code, idx: number) => (
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
    </div>
  );
}
