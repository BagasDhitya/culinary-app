import { FC } from "react";
import Image from "next/image";
import axios from "axios";

import { items } from "../../../utils/datas/categories.json";

import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

type Home = {
  data: any;
};

const Home: FC<Home> = ({ data }) => {
  return (
    <section className="w-full h-max flex flex-col gap-y-32 overflow-x-hidden">
      <Navbar />
      <div className="w-screen font-semibold absolute top-40 flex justify-center items-center">
        <p className="">
          - Discovering a world of delectable dishes, tantalizing tastes, and
          mouthwatering recipes -
        </p>
      </div>
      <div className="flex gap-x-5 justify-center items-center w-screen h-max">
        {items &&
          items.map((item: any, index: any) => {
            return (
              <div key={index} className="w-60 h-80 relative my-0">
                <Card id="foods">
                  <Image
                    width={150}
                    height={150}
                    alt="categories"
                    className="w-full h-full rounded-md"
                    src={item?.image}
                  />
                  <h2 className="absolute bottom-5 ml-5 z-10 text-white text-xl font-semibold">
                    {item?.title}
                  </h2>
                  <div className="absolute inset-0 bg-black opacity-40 rounded-md mix-blend-multiply"></div>
                </Card>
              </div>
            );
          })}
      </div>
      <div className="h-max flex flex-col gap-y-5 text-xl ml-20">
        <p className="font-semibold ">Daily Meal Plan</p>
        <div className="p-5 flex flex-col gap-y-10">
          <p className="font-semibold ">Information</p>
          <div className="mr-auto w-96 rounded-md shadow-md">
            <div className="p-5">
              <p>Calories : {data?.nutrients?.calories}</p>
              <p>Carbohydrates : {data?.nutrients?.carbohydrates} </p>
              <p>Fat : {data?.nutrients?.fat} </p>
              <p>Protein : {data?.nutrients?.protein} </p>
            </div>
          </div>
          <p className="font-semibold">Menu</p>
          <div className="flex gap-x-5 justify-start items-center w-screen h-max">
            {data &&
              data?.meals?.map((item: any, index: any) => {
                return (
                  <div key={index} className="w-60 h-80 relative">
                    <Card id="foods">
                      <Image
                        width={100}
                        height={100}
                        alt="meal"
                        className="w-full h-full rounded-md"
                        src={`https://webknox.com/recipeImages/${
                          item?.sourceUrl?.match(/(\d+)$/)[0]
                        }-556x370.jpg`}
                      />
                      <h2 className="absolute bottom-5 ml-5 z-10 text-white text-xl font-semibold">
                        {item?.title}
                      </h2>
                      <div className="absolute inset-0 bg-black opacity-40 rounded-md mix-blend-multiply"></div>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps(): Promise<{ props: Home }> {
  try {
    const response = await axios.get(
      `mealplanner/generate?timeFrame=day&apiKey=${process.env.SPOONACULAR_API_KEY}`
    );
    const data = response.data;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default Home;
