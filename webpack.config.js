const path = require("path");

module.exports={
    mode: "development", 
    entry: "./src/index.tsx", 
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    target: "web",
    // devServer: {
    //     /** "port" 
    //      * port of dev server
    //     */
    //     port: "9500",
    //     /** "static" 
    //      * This property tells Webpack what static file it should serve
    //     */
    //     static: ["./public"],
    //     /** "open" 
    //      * opens the browser after server is successfully started
    //     */
    //     open: true,
    //     /** "hot"
    //      * enabling and disabling HMR. takes "true", "false" and "only". 
    //      * "only" is used if enable Hot Module Replacement without page 
    //      * refresh as a fallback in case of build failures
    //      */
    //     hot: true ,
    //     /** "liveReload"
    //      * disable live reload on the browser. "hot" must be set to false for this to work
    //     */
    //     liveReload: true
    // },
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/, 
                use:  'babel-loader'
            }
        ]
    }
}