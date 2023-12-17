import { AnimatedPage } from '../components/AnimatedPage';

function Welcome() {
  return (
    <>
      <AnimatedPage>
        <div>
          <h1 className="text-5xl font-semibold">Welcome</h1>
          <p>Pick a section to start</p>
        </div>
      </AnimatedPage>
    </>
  );
}

export default Welcome;
