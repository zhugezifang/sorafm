'use client';

import Input from "../input";
//import Producthunt from "../producthunt";

export default function ({ dict }: { dict: any }) {
  return (
    <div className="mx-auto mt-4 max-w-full sm:mt-4 sm:px-0 lg:px-0">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 shadow-2xl sm:rounded-3xl sm:px-24 xl:pt-24">
        <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold tracking-tight text-primary sm:text-6xl">
          {dict.brand.title}
        </h1>
        <p className="mx-auto mt-6 text-center text-xl leading-8 text-gray-300">
          {dict.brand.sub_title}
        </p>

        {/*
          <Producthunt />

          <Input dict={dict} />

          <div className="mx-auto max-w-6xl text-slate-400 text-sm mt-4 text-center">
            {dict.subscribe.tip}
          </div>
        */}
      
      </div>
    </div>
  );
}
