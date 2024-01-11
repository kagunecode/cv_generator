import PreviewCV from './PreviewCV';

export default function Layout({ children }) {
  return (
    <div className="grid h-full w-[calc(100vw-3rem)] translate-x-[3rem] grid-cols-3 p-3">
      <div className="col-span-2 overflow-y-auto overflow-x-hidden">
        <div>{children}</div>
      </div>
      <div className="col-span-1 bg-zinc-200 p-2">
        <PreviewCV></PreviewCV>
      </div>
    </div>
  );
}
