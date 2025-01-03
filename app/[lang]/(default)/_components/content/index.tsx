'use client';

import { Nav } from "@/types/nav";

//import Producthunt from "../producthunt";

export default function ({ dict }: { dict: any }) {
    const contentTions: Nav[] = dict.content;

  return (
    <div className="relative isolate overflow-hidden px-6 py-6 sm:rounded-3xl sm:px-24 xl:pt-4 flex justify-between items-center">
            <div className="mx-auto">
                <div
                    className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    {contentTions.map((tab: Nav, idx: number) => (
                        <div key={idx} className="">
                            <h3 className="font-bold text-4xl">
                                {tab.title}
                            </h3>
                            <p className="text-base leading-8 my-5">
                                {tab.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
     </div>
  );
}
