import { useState } from 'react';

import PreviewCV from './PreviewCV';

export default function MobileViewer() {
  const [showPreview, setPreview] = useState(false);
  return (
    <>
      <button
        onClick={() => setPreview(true)}
        className="absolute bottom-0 right-0 z-10 m-5 rounded-full bg-emphasis-500 p-5 font-bold"
      >
        See
      </button>
      <div
        className={`absolute z-50 h-full w-full ${
          showPreview ? 'block' : 'hidden'
        }`}
      >
        <button
          onClick={() => setPreview(false)}
          className="absolute left-[50%] top-0 translate-x-[-50%] px-10 py-2 font-bold duration-200 hover:bg-emphasis-500"
        >
          Close
        </button>
        <PreviewCV />
      </div>
    </>
  );
}
