const path = require("path");

const config = {
    entry: {
        app: path.resolve(__dirname, "../src/client-entry.js")
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/",
        filename: "assests/js/[name].js"
    }
};

module.exports = config;