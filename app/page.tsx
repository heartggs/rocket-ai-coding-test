import { AppContainer } from "./components/AppContainer";
import IntroSection from "./components/IntroSection";
import ResultSection from "./components/ResultSection";
import WaitingSection from "./components/WaitingSection";

export default function Home() {
  return (
    <div className="mx-auto w-full min-w-[320px] max-w-md h-dvh overflow-y-auto no-scrollbar bg-[#f3f2ef]">
      <IntroSection />
      <WaitingSection />
      <ResultSection />
    </div>
  );
}
