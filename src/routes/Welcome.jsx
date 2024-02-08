import { AnimatedPage } from '../components/AnimatedPage';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <AnimatedPage>
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-[10rem] font-semibold tracking-tighter">
            Welcome
          </h1>
          <Link
            to="/general"
            className="border px-16 py-4 text-[2rem] duration-200 hover:bg-emphasis-500 "
          >
            Start Now!
          </Link>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Welcome;
