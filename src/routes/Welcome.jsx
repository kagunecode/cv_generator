import { AnimatedPage } from '../components/AnimatedPage';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <>
      <AnimatedPage>
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-[7rem] font-semibold tracking-tighter">
            Kagune CV Generator
          </h1>
          <p>
            This CV generator is still in beta, more functions will be added in
            the future. Please, refer to my social media for suggestions or
            requests.
          </p>
          <Link
            to="/general"
            className="mt-5 bg-gray-50 px-5 py-3 text-[1.5rem] font-bold duration-200 hover:bg-emphasis-500 "
          >
            Start Now!
          </Link>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Welcome;
