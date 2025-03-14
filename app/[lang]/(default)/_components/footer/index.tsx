//import Social from "../social";
'use client';

import { Nav } from "@/types/nav";
import LangLinks from "../LangLinks";

export default function ({ lang, dict }: { lang: string; dict: any }) {
  const navigations: Nav[] = dict.footer;

  return (
    <section>
      <div className="w-screen flex-col bg-gray-100 px-6 py-20 lg:flex lg:px-10 xl:px-24">
        <div className="lg:flex lg:flex-row lg:justify-between">
          <div>
            <a href="/" className="inline-block max-w-full">
            Corporate Codes
            </a>
            <p className="font-inter mt-4 max-w-[350px] text-base font-light text-gray-500">
              {dict.brand.title}
            </p>
            {/*<div className="mb-8 mt-6 flex flex-row">
              <Social />
              </div>*/}
          </div>
          <div className="flex grow flex-row flex-wrap lg:mx-10 lg:flex-nowrap lg:justify-center">
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">Products</div>
              <a
                href="https://virtual-try-on.online"
                title="Kolors Virtual Try On"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Kolors Virtual Try On
              </a> 
              <a
                href="https://tiktok-money-calculator.online"
                title="TikTok Money Calculator"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                TikTok Money Calculator
              </a>
              <a href="https://woy.ai/" target="_blank"
                className="font-inter font-light text-gray-500" title="Woy AI Tools Directory">Woy AI Tools</a>
              <a href="https://tap4.ai/" target="_blank"
                className="font-inter font-light text-gray-500" title="Tap4 AI Tools Directory">Tap4 AI Tools Diresctory</a>
              <a href="https://navs.site" target="_blank"
                className="font-inter font-light text-gray-500">AI Nav Site</a>

            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">FRIENDS</div>
              <a
                href="https://bottleneck-calculators.online/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                PC Bottleneck Calculator
              </a>
              <a
                href="https://image-splitter.online/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                Image Splitter
              </a>
              <a
                href="https://www.zjnav.com"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                终极导航
              </a>
              <a
                href="/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                None
              </a>
              <a
                href="/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                None
              </a>
            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">Legal</div>
              {navigations.map((tab: Nav, idx: number) => (
                <a
                  key={idx}
                  href={`/${tab.url}`}
                  target="_blank"
                  className="font-inter font-light text-gray-500"
                >
                  {tab.title}
                </a>
              ))}
            </div>

          </div>
        </div>
        <div className="mx-auto my-12 w-full border border-gray-800 lg:my-20"></div>
        <LangLinks />
        <div>
          <p className="font-inter lg: text-center text-sm text-gray-500">
            © Copyright 2025.{" "}
            <a
              href="/"
              target="_blank"
              className="text-primary"
            >
              Corporate Codes
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
