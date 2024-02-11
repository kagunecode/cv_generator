import { useState } from 'react';

import PreviewCV from './PreviewCV';

export default function MobileViewer({ showPreview, setPreview }) {
  return (
    <>
      <button
        onClick={() => setPreview(false)}
        className="absolute left-[50%] top-0 translate-x-[-50%] px-10 py-2 font-bold duration-200 hover:bg-emphasis-500"
      >
        Close
      </button>
      <PreviewCV />
    </>
  );
}
