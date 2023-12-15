import Image from "next/image";
import Box2 from "src/components/Box2";
import Box5 from "src/components/Box5";
import Banner from "src/components/Banner";
import Box4 from "src/components/Box4";
import { BaseNextRequest } from "next/dist/server/base-http";

export default function Home() {
  return (
    <div>
      <Banner />
      <Box2 />
      <Box4 />
      <Box5 />
    </div>
  );
}
