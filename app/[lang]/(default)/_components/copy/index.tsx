'use client';
import React, { useState } from 'react';

export default function ({ code,copy,daima }: { code: string;copy:string;daima:string}) {

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Hide the message after 2 seconds
    } catch (err) {
      console.error('Failed to copy using navigator.clipboard: ', err);

      // Fallback using execCommand
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <div className="container max-w-2xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">{daima}</h2>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <code id="code" className="text-lg font-medium">{code}</code>
              <button id="copy-btn" onClick={copyToClipboard} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{copy}</button>
          </div>
    </div>
  );
}
