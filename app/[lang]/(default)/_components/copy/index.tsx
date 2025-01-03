'use client';
import Script from 'next/script';

export default function ({ code,copy,daima }: { code: string;copy:string;daima:string}) {

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(code);
      alert("copy success!");
    } catch (err) {
      alert("copy failed!");
    }
  };

  return (
    <>
    
    <div className="container max-w-2xl mx-auto p-4">
      
          <h2 className="text-2xl font-bold mb-4">{daima}</h2>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <span id="code" className="text-lg font-medium">{code}</span>
              <button id="copy-btn" onClick={copyText} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">{copy}</button>
          </div>
    </div>
    </>
  );
}
