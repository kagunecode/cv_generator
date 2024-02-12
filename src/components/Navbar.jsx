import { Link } from 'react-router-dom';
import sectionInfo from '../data/sectionInfo';

import { useSidebarContext } from '../contexts/SidebarContext';

function Items() {
  const itemList = sectionInfo.map(tab => {
    return (
      <li
        className="group relative overflow-hidden px-3 font-semibold duration-200"
        key={tab.tabName}
      >
        <Link to={tab.tabUrl}>{tab.tabName}</Link>
        <div className="absolute left-0 z-[-10] h-full w-full bg-emphasis-500 duration-200 group-hover:translate-y-[-1.5rem]"></div>
      </li>
    );
  });
  return <ul className="flex">{itemList.reverse()}</ul>;
}

function Navbar() {
  const { status, setStatus } = useSidebarContext();

  const handleSidebarToggle = () => {
    setStatus(!status);
  };
  return (
    <div
      className={`fixed ${
        status ? 'z-0' : 'z-10'
      } flex h-12 w-[100dvh] items-center justify-end border px-2 py-2`}
      style={{
        transform: 'rotate(-90deg) translate(-100%, 0)',
        transformOrigin: 'left top',
      }}
    >
      <Items />
      <Link
        className="ml-2 rotate-90 animate-pulse px-5 text-3xl font-bold text-emphasis-500 duration-200 hover:animate-none hover:cursor-pointer hover:text-black"
        onClick={handleSidebarToggle}
      >
        K
      </Link>
    </div>
  );
}

export default Navbar;
