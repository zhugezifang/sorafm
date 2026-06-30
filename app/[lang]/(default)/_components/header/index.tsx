'use client';

import { useState } from 'react';
import Langswitch from "../langswitch";
import { Nav } from "@/types/nav";

export default function ({ lang, dict }: { lang: string; dict: any }) {
  const navigations: Nav[] = dict.nav;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const hotelBrands = [
    { key: 'Hilton', name: dict.Hilton?.t0 || 'Hilton', url: dict.Hilton?.url || 'codePage/Hilton' },
    { key: 'Marriott', name: dict.Marriott?.t0 || 'Marriott', url: dict.Marriott?.url || 'codePage/Marriott' },
    { key: 'Hyatt', name: dict.Hyatt?.t0 || 'Hyatt', url: dict.Hyatt?.url || 'codePage/Hyatt' },
    { key: 'IHG', name: dict.IHG?.t0 || 'IHG', url: dict.IHG?.url || 'codePage/IHG' },
    { key: 'Western', name: dict.Western?.t0 || 'Best Western', url: dict.Western?.url || 'codePage/Western' },
    { key: 'Choice', name: dict.Choice?.t0 || 'Choice', url: dict.Choice?.url || 'codePage/Choice' },
    { key: 'Omni', name: dict.Omni?.t0 || 'Omni', url: dict.Omni?.url || 'codePage/Omni' },
    { key: 'Accor', name: dict.Accor?.t0 || 'Accor', url: dict.Accor?.url || 'codePage/Accor' },
    { key: 'Wyndham', name: dict.Wyndham?.t0 || 'Wyndham', url: dict.Wyndham?.url || 'codePage/Wyndham' },
    { key: 'Radisson', name: dict.Radisson?.t0 || 'Radisson', url: dict.Radisson?.url || 'codePage/Radisson' },
  ].filter(hotel => dict[hotel.key]);

  return (
    <header>
      <script defer src="https://umami.virtual-try-on.online/script.js" data-website-id="86a16c2b-96f7-431a-a451-8989b30f1c8d"></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4158779929727637"
        crossOrigin="anonymous"></script>
    <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y65J1475LV`}
    />
    <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y65J1475LV');
            `,
          }}
    />
      <div className="h-auto w-screen bg-gray-100">
        <nav className="font-inter mx-auto h-auto w-full max-w-7xl lg:relative lg:top-0">
          <div className="flex flex-row items-center px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-8 xl:px-10">
            <a
              href={`/${lang}/`}
              className="text-xl font-medium flex items-center"
            >
              <span className="font-bold text-primary text-2xl">
                {dict.brand.name}
              </span>
            </a>

            <div className="hidden md:flex ml-16 items-center">
              {navigations.map((tab: Nav, idx: number) => (
                <a
                  key={idx}
                  href={`/${lang}/${tab.url}`}
                  target={tab.target || "_self"}
                  className="text-md font-medium leading-6 mr-6"
                >
                  {tab.title}
                </a>
              ))}

              <div className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-md font-medium leading-6 flex items-center gap-1 hover:text-gray-600"
                >
                  {dict.allHotels || "All Hotels"}
                  <svg
                    className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 z-50">
                    <div className="w-48 bg-white rounded-md shadow-lg py-1">
                      {hotelBrands.map((hotel) => (
                        <a
                          key={hotel.key}
                          href={`/${lang}/${hotel.url}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {hotel.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-1"></div>

            <div className="flex flex-row items-center lg:flex lg:flex-row lg:space-x-3 lg:space-y-0">
              <div className="md:block mr-4">
                
              </div>
              <div>
                <Langswitch />
              </div>
            </div>
            <a href="#" className="absolute right-5 lg:hidden"></a>
          </div>
        </nav>
      </div>
    </header>
  );
}