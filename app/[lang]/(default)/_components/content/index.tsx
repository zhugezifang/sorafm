'use client';

import { Nav } from "@/types/nav";

//import Producthunt from "../producthunt";

export default function ({ dict }: { dict: any }) {
    const contentTions: Nav[] = dict.content;

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-6 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
            <div className="mx-auto">
                <div
                    className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    {contentTions.map((tab: Nav, idx: number) => (
                        <div className="">
                            <h2 className="text-white font-bold text-4xl">
                                {tab.title}
                            </h2>
                            <p className="text-white text-base leading-8 my-5">
                                {tab.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
     </div>
  );
}
