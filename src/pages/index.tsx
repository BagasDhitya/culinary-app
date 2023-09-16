import Image from "next/image";

import Layout from "@/components/Layout";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2">
        <div className="bg-culinary-white w-screen h-screen flex flex-col gap-y-5 justify-center items-start">
          <h2 className="mx-20 font-semibold text-amber-500">
            Explore the World of Culinary Delights with Culladict!
          </h2>
          <div className="w-96 mx-20">
            <p className="text-amber-500">
              Discovering a world of delectable dishes, tantalizing tastes, and
              mouthwatering recipes
            </p>
          </div>
          <div className="w-96 h-10 mx-20 mt-20">
            <Button id="started" label="Get Explore!" />
          </div>
        </div>
        <div className="w-full h-screen flex items-center">
          <Image
            className="h-full w-full"
            alt="landing"
            src={require("../../public/landing.jpeg")}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
