"use strict";

// gatsby-config.js
var path = require("path"); // Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules


var gatsbyRequiredRules = path.join(process.cwd(), "node_modules", "gatsby", "dist", "utils", "eslint-rules");
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Jan Hamara Personal PWA"
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: "gatsby-plugin-manifest",
    options: {
      icon: "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: "./src/images/"
    },
    __key: "images"
  }, {
    resolve: "gatsby-plugin-eslint",
    options: {
      // Gatsby required rules directory
      rulePaths: [gatsbyRequiredRules],
      // Default settings that may be ommitted or customized
      stages: ["develop"],
      extensions: ["js", "jsx", "ts", "tsx"],
      exclude: ["node_modules", "bower_components", ".cache", "public"] // Any additional eslint-webpack-plugin options below
      // ...

    }
  }]
};