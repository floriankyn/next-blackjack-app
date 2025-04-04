import Footer from "@/components/molecules/Footer";
import Rules from "@/components/molecules/Rules";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroDescription from "@/components/molecules/HeroDescription";

export default function Home() {
  return (
    <main>
      <div className=" w-full h-[200px] bg-black flex justify-center items-center">
        <h1 className="text-8xl font-bold text-white">Welcome to Blackjack!</h1> 
      </div>
      <div className="flex flex-col items-center mt-2 text-center">
        <div className="flex justify-center items-center w-full mt-4">
          <HeroDescription />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <Rules />
        </div>     

        <div>
          <Link href="/game">
            <Button variant={"default"} className="mt-6 w-[200px]">
              Play
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
