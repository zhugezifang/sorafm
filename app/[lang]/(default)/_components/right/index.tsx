'use client';

export default function ({ dict,lang }: { dict: any,lang: string }) {

  return (
    <>
    
      <div className="bg-gray-700 lg:flex-row lg:flex-row lg:justify-between p-2">

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
    </>
  );
}
