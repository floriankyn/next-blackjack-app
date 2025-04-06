import Footer from "@/components/molecules/Footer";
import Rules from "@/components/molecules/Rules";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroDescription from "@/components/molecules/HeroDescription";

export default function Home() {
  return (
    <main>
      <div className=" w-full h-[250px] bg-black flex justify-center items-center">
        <h1 className="text-8xl font-bold text-white text-center">
          Welcome to <br /> Blackjack!
        </h1> 
      </div>
      <div className="flex flex-col items-center mt-2 text-center">
        <div className="flex justify-center items-center w-full mt-4">
          <HeroDescription />
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <Rules />
        </div>     

        <div className="mb-6">
          <Link href="/game">
            <Button variant={"default"} className="mt-6 py-6 px-10 hover:scale-105 ease-in-out duration-300" size={"lg"}>
              Play some Blackjack!
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
