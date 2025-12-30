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
             
              <a href="https://www.xhs-download.org/" target="_blank"
                className="font-inter font-light text-gray-500">RedNote Video Downloader without Watermark</a>

              <a href="https://rednotevideodownload.org/" target="_blank"
                className="font-inter font-light text-gray-500">RedNote Video Downloader</a>
              <a href="https://onlinenotepad101.org" target="_blank"
                className="font-inter font-light text-gray-500">Online Notepad</a>
              

            </div>
            <div className="mb-5 mr-8 flex max-w-[200px] grow basis-[100px] flex-col space-y-5 lg:mx-10">
              <div className="font-inter font-medium">FRIENDS</div>
              <a
                href="https://howattractiveami.app/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                How Attractive am I
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
                href="http://guozhivip.com/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                果汁资源导航
              </a>
              <a
                href="https://templatejp.online/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                無料のテンプレート
              </a>
              <a
                href="https://cv-template.online/"
                target="_blank"
                className="font-inter font-light text-gray-500"
              >
                免费简历模板
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
