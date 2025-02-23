import React from "react";
import ReactDOM from "react-dom/client";

const MyComponent = () => {
  return <p>I am learning React. My life is getting better.</p>;
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<MyComponent />);
} else {
  console.error("No root element found in the document.");
}
