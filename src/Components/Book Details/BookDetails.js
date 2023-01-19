import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const details = useLoaderData().books[0];
  const { image, title,subtitle,url } = details;
  console.log(details);
  return (
    <section className="bg-gray-800 text-gray-100 mt-10">
      <div className="container flex flex-col mx-auto lg:flex-row">
        <div>
          <img className="h-96" src={image} alt="" />
        </div>
        <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 mb-8 dark:text-violet-400"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <h2 className="text-3xl font-semibold leading-none">{title}</h2>
          <p className="mt-4 mb-8 text-sm"> {subtitle}
            Snowflake's ability to eliminate data silos and run workloads from a
            single platform creates opportunities to democratize data analytics,
            allowing users at all levels within an organization to make
            data-driven decisions. Whether you're an IT professional working in
            data warehousing or data science, a business analyst or technical
            manager, or an aspiring data professional wanting to get more
            hands-on experience with the Snowflake platform, this book is for
            you. 
          </p>
          <div>
          <a href={url}>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-blue-400 text-gray-900">
            Download Pdf
            </button>
          </a>
            <Link to='/home'>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900 ml-10">
            Back To Home
            </button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
