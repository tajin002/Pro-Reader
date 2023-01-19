import { LottiePlayer } from "lottie-react";
import React from "react";
import Lottie from 'lottie-react'
import reader from '../../assests/91736-exams.json'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <button className="bg-amber-300 w-24 rounded-lg mb-5">On Sell !</button>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            A reader lives a
              <br className="hidden md:block" />
              thousand live {''}
              <span className="inline-block text-purple-400">
              before he dies
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div>
            <Link
              to="/books"
              aria-label=""
              className="bg-blue-600 p-2 rounded-2xl text-white inline-flex items-center font-semibold transition-colors duration-200 hover:text-orange-300"
            >
              Visit Shop
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>

            <Link
              to="/books"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 ml-4"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
        <Lottie animationData={reader} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
