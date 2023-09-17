import Image from "next/image";

import Layout from "@/components/Layout";
import Button from "@/components/Button";

const Landing = () => {
  return (
    <Layout>
      <div className="lg:grid lg:grid-cols-2 grid grid-cols-1">
        <div className="lg:my-60 w-screen h-screen flex flex-col gap-y-5 lg:justify-center items-start order-last lg:order-none">
          <Image
            alt="logo"
            className="mx-auto lg:mx-5"
            src={require("../../public/logo.png")}
          />
          <h2 className="lg:mx-20 mx-auto font-semibold text-amber-500">
            Explore the World of Culinary Delights with Culladict!
          </h2>
          <div className="w-96 lg:mx-20 mx-auto">
            <p className="text-amber-500 lg:text-left text-center">
              Discovering a world of delectable dishes, tantalizing tastes, and
              mouthwatering recipes
            </p>
          </div>
          <div className="w-96 h-10 lg:mx-20 mx-auto mt-20">
            <Button id="started" label="Get Explore!" />
          </div>
        </div>
        <div className="w-full h-1/2.5 flex items-center order-first lg:order-none">
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
