import { Link } from 'react-router-dom';
import { animateError } from '../components/AnimatedPage';

function ErrorPage() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tr from-emphasis-500 via-yellow-300 to-yellow-200">
      <h1 className="absolute select-none text-[200rem] font-medium text-white drop-shadow-2xl hover:cursor-default">
        404
      </h1>
      <div className="relative">
        <h1 className="animate-errortext select-none text-[10rem] font-semibold text-white xl:text-[20rem]">
          404
        </h1>
        <h1 className="absolute top-0 text-[10rem] font-semibold text-black xl:text-[20rem]">
          404
        </h1>
      </div>
      <p className="text-2xl font-light md:text-4xl">Page not found</p>
      <Link
        className="z-10 mt-4 bg-black px-5 py-2 text-xl font-semibold text-white duration-200 hover:bg-white hover:text-black"
        to={'/general'}
      >
        Go Home
      </Link>
    </div>
  );
}

export default animateError(ErrorPage);
