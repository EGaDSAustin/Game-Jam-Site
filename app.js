// make a build one

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Bundler = require('parcel-bundler')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
})); // TODO: check what the extended means


// entry file
const file = 'client/index.html'
// bundler settings
const bundlerOptions = {
    outDir: './dist'
};

const bundler = new Bundler(file, bundlerOptions);
app.use(bundler.middleware());

app.use(express.static(path.join(__dirname, './dist')))
const PORT = process.env.PORT || 1234; // TODO: put port in a config

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));