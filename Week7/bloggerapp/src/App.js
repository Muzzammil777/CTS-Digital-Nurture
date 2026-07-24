// BloggerApp - tab-style navigation using useState for conditional rendering
import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  // Track which section is currently active
  const [activeComponent, setActiveComponent] = useState("book");

  return (
    <div>
      <h1>Welcome to BloggerApp</h1>
      {/* Navigation buttons to switch content */}
      <div>
        <button onClick={() => setActiveComponent("book")}>Book Details</button>
        <button onClick={() => setActiveComponent("blog")}>Blog Details</button>
        <button onClick={() => setActiveComponent("course")}>Course Details</button>
      </div>

      {/* Conditionally render active component */}
      {activeComponent === "book" && <BookDetails />}
      {activeComponent === "blog" && <BlogDetails />}
      {activeComponent === "course" && <CourseDetails />}
    </div>
  );
};

export default App;
