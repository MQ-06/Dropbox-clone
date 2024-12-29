import React from "react";

const ErrorPage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#1e1919",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        role="presentation"
        height="1000"
        width="1000"
        className="dig-Illustration dig-Illustration-spot"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M246.6 107.5c-177.4-41-168.1 232.7-10.8 243.7 35 2 52.8 14.2 70 43.7 6.4 4.9 15.9 5.4 22 11.2 12.2 11.6 9.8 25.1 30.2 26.6 21.7 1.6 25.8-19.6 14.5-34.6-18.8-18.8-28.9-17.1-39.8-46.1-7.7-16.9-5.7-46.9-21.1-58.4-6.3-4.7-24.4-6.9-22-19.4 1.2-5.9 18.5-17.9 23.6-22 25.5-20.9 46.4-56.6 25.3-88.8-13.1-20-44.6-22.4-63.6-34.9-10.6-6.8-13.1-16.3-28.3-21Z"
          fill="#E39D77"
        ></path>
        <path
          d="M298.7 273.7c1.8 21 1.5 41.8 3.6 62.7-.5 5.6 4.7 15.7-3.4 17-7.3 1.4-14.6 2.5-21.7 4.6-4.4.8-5 .2-5.4-4.2-3.1-23.9-3.5-48-5-72.1-16.2-4-35.8-7.2-46.3-21.5-10.6-16.7-27.5-31.1-30.1-51.6-3.4-23.7 8.6-45 23.7-62.2 9.5-13.2 24.7-19.7 40.4-22.1 37-4.5 94.1 5.9 98.5 50.8.4 19.2.4 38.5-9.2 55.7-9.4 19.3-23.2 38.1-45.1 42.9Zm-25-123.8c-36.8-2.8-61.5 32.6-51.3 66.8 7.8 17.9 18.1 38.2 39.5 41.2 37.2 12.4 68.2-28.6 66.5-63.1-1.7-24.8-30.3-46.7-54.7-44.9Z"
          fill="#B4C8E1"
        ></path>
        <g fill="#1E1919">
          <path
            d="M341 421.6c-5.4-21.8-32.1-22.5-43.2-39.7-4.6-8.2-3.2-18.3-7.4-26.7-2.4-6.7-10.2-15.1-18-11.2 17.7 9.8 11.5 32.6 22.9 46.2 18.8 18.1 35.8 14.2 43.8 44.6 6.4-2.9 3.3-8.4 1.9-13.2Z"
          ></path>
        </g>
      </svg>
      <h1 style={{ fontSize: "24px", margin: "20px 0" }}>Error (4xx)</h1>
      <h2 style={{ fontSize: "18px", fontWeight: "100" }}>
        We can’t find the page you’re looking for.
      </h2>
      <h3 style={{ fontSize: "16px", fontWeight: "100" }}>
        Here are a few links that may be helpful:
      </h3>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          fontSize: "14px",
          margin: "20px 0",
        }}
      >
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.dropbox.com">Home</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.dropbox.com/help">Help Centre</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.dropbox.com/login">Sign in</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.dropbox.com/register">Get a free account</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.dropbox.com/plus">Dropbox Plus</a>
        </li>
        <li style={{ margin: "10px 0" }}>
          <a href="https://www.dropbox.com/business">Dropbox Business</a>
        </li>
      </ul>
    </div>
  );
};

export default ErrorPage;
