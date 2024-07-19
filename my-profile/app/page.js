import Image from "next/image";
import Herosection from "./components/Herosection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1b1b1b] container mx-auto px-12 py-4">
      <Herosection />
    </main>
  );
}
