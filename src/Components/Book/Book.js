import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {image,title,subtitle,price , isbn13} = book
  console.log(book);
  return (
    <div className="text-gray-100 mb-10">
      <Link>
      <img
        src={image}
        alt=""
        className="bg-amber-100"
        to = ''
      />
      </Link>
      <div className=" p-6 bg-gray-100 w-[300px] h-50">
        <div>
          <h2 className="text-normal text-black font-bold tracking-wide">
            {title}
          </h2>
          <p className="text-black text-xs">
            {subtitle.slice(0,50)+('...')}
          </p>
          <p className="text-black font-semibold">Price : {price}</p>
          <Link to={`../Book/${isbn13}`}>
            <button className="text-center text-white btn bg-indigo-500 rounded-2xl mt-5 p-2 w-full">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
