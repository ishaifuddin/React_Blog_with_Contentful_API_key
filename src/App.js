import React, { Component } from "react";
import BlogDetails from "./blog/blogDetails";
import BlogList from "./blog/blogList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blogDetails/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
