const path = require("path");

exports.createPages = ({ actions }) => {
  const { createSlice } = actions;

  const header = path.resolve("src/components/header.jsx");

  createSlice({
    id: "header",
    component: header,
  });
};
