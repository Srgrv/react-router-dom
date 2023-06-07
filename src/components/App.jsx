//packages
import React from "react";
import { Routes, Route } from "react-router-dom";

//styles
import "../styles/App.css";

//pages
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import HomePage from "../Pages/HomePage";
import NotfoundPage from "../Pages/NotfoundPage";
import SinglePage from "../Pages/SinglePage";
import CreatePost from "../Pages/CreatePost";
import EditPost from "../Pages/EditPost";

//components
import Layout from "../components/Layout/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:category" element={<SinglePage />} />
          <Route path="blog/:category/edit" element={<EditPost />} />
          <Route path="blog/new" element={<CreatePost />} />
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
