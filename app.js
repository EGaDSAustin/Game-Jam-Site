const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Bundler = require('parcel-bundler')
const { settings } = require('package.json');
const { PORT } = require('./backend/config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // TODO: check what the extended means


// entry file
const file = 'client/index.html'
// bundler settings
const bundlerOptions = { outDir: settings.PARCEL_DIST_DIR };

const bundler = new Bundler(file, bundlerOptions);
app.use(bundler.middleware());

app.use(express.static(path.join(__dirname, './dist')))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));