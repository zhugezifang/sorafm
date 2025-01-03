'use client';
import Script from 'next/script';
//import React, { useState } from 'react';

export default function ({ code,copy,daima }: { code: string;copy:string;daima:string}) {

  return (
    <div className="container max-w-2xl mx-auto p-4">
      <Script strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            const copyButton = document.getElementById('copyButton');
            copyButton.addEventListener('click', function() {
                navigator.clipboard.writeText(document.getElementById('code').value)
                    .then(() => {
                        alert('Code copied to clipboard!');
                    })
                    .catch(err => {
                        console.error('Failed to copy code: ', err);
                    });
            });
            `,
          }}
      />
          <h2 className="text-2xl font-bold mb-4">{daima}</h2>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <code id="code" className="text-lg font-medium">{code}</code>
              <button id="copy-btn" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{copy}</button>
          </div>
    </div>
  );
}
