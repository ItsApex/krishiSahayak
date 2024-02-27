import Image from "next/image";
import Landing from "./Landingpage/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Landing />
    </main>
  );
}
