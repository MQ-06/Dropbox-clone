import React from "react";

const Words = () => {
  return (
    <div className="bg-[#f9f8f7] min-h-screen flex items-center justify-center p-4">
      <div
        className="max-w-2xl mx-auto text-3xl text-black font-bold leading-relaxed"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <p>
          With Dropbox you can {" "}
          <span className="text-[#9b6400] font-bold inline-flex items-center gap-1">
           
            edit and sign
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-8 text-[#9b6400]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.852 8.937v7.523l-2.438 3.6-2.439-3.6V6.147c0-.59.248-1.147.678-1.552.428-.403.998-.62 1.582-.62h.353a2.267 2.267 0 0 1 1.589.623c.428.404.675.96.675 1.549v1.29h3.288v4.582h-1.5V8.937H8.852Z"
              ></path>
            </svg>
          </span>
          your documents,
          <span className="text-[#0f503c] font-bold inline-flex items-center gap-1">
            collaborate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-8 text-[#0f503c]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="m12.25 9.085-2.925 3.119-1.822-1.656 1.009-1.11.729.662 1.915-2.041 1.094 1.026Z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.25 7.428c0-.927.751-1.678 1.678-1.678h7.898c.927 0 1.678.751 1.678 1.678v1.12h2.93c.927 0 1.678.75 1.678 1.677v5.145c0 .926-.75 1.677-1.677 1.677h-.149v1.842l-3.404-1.842h-4.346a1.677 1.677 0 0 1-1.677-1.678v-.783l-2.783 1.506V14.25h-.148a1.678 1.678 0 0 1-1.678-1.678V7.428Z"
              ></path>
            </svg>
          </span>
          on projects,
          <span className="text-[#78286e] font-bold inline-flex items-center gap-1">
            search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-8 text-[#78286e]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="m19.03 17.97-4.009-4.01A5.89 5.89 0 0 0 16 10.5C16 7.056 13.944 5 10.5 5S5 7.056 5 10.5 7.056 16 10.5 16a5.89 5.89 0 0 0 3.461-.979l4.009 4.01 1.06-1.061Z"></path>
            </svg>
          </span>
          across all your apps, and it happens in the same place you {" "}
          <span className="text-[#cd2f7b] font-bold inline-flex items-center gap-1">
            securely store
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-8 text-[#cd2f7b]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15 9V7.25C15 5.768 14.436 4 11.75 4S8.5 5.768 8.5 7.25V9H6v7.75A3.254 3.254 0 0 0 9.25 20h5a3.254 3.254 0 0 0 3.25-3.25V9H15Z"></path>
            </svg>
          </span>
          all your content. It’s that simple :)
        </p>
      </div>
    </div>
  );
};

export default Words;
