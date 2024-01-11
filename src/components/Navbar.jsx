import { Link } from 'react-router-dom';
import sectionInfo from '../data/sectionInfo';
import { AnimatedPage } from './AnimatedPage';

import { useSidebarContext } from '../contexts/SidebarContext';

function Items(props) {
  const itemList = props.navbarTabs.map(tab => {
    return (
      <li
        className="group relative overflow-hidden px-3 font-semibold text-slate-400 duration-200 hover:cursor-default hover:text-slate-800"
        key={tab.tabName}
      >
        <Link to={`${tab.tabUrl}`}>{tab.tabName}</Link>
        <div className="absolute left-0 z-[-10] h-full w-full bg-emphasis-500 duration-150 group-hover:translate-y-[-1.5rem]"></div>
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
    <AnimatedPage>
      <div
        className="fixed flex h-12 w-[100vh] items-center justify-end border px-2 py-2"
        style={{
          transform: 'rotate(-90deg) translate(-100%, 0)',
          transformOrigin: 'left top',
        }}
      >
        <Items navbarTabs={sectionInfo.reverse()}></Items>
        <Link
          className="ml-2 rotate-90 px-5 text-3xl font-bold duration-200 hover:rotate-180 hover:cursor-pointer"
          onClick={handleSidebarToggle}
        >
          L
        </Link>
      </div>
    </AnimatedPage>
  );
}

export default Navbar;
