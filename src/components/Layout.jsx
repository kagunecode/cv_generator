import PreviewCV from './PreviewCV';

export default function Layout({ children }) {
  return (
    <div className="grid h-full w-[calc(100vw-3rem)] translate-x-[3rem] grid-cols-3 p-3">
      <div className="col-span-2">{children}</div>
      <div className="col-span-1 h-full bg-slate-200 p-2">
        <PreviewCV></PreviewCV>
      </div>
    </div>
  );
}
