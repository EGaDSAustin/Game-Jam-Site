const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const Bundler = require('parcel-bundler');
const { settings } = require('./package.json');
const { PORT } = require('./server/config');
const { testDataBaseSubmission } = require('./server/database');

app.use(bodyParser.urlencoded({ extended: false })); // TODO: check what the extended means
app.use(bodyParser.json());

// entry file
const file = 'client/index.html';

console.log(`Node env is ${process.env.NODE_ENV}`);

if(process.env.NODE_ENV === 'LOCAL') {
    // bundler settings
    const bundlerOptions = { outDir: settings.PARCEL_DIST_DIR };

    const bundler = new Bundler(file, bundlerOptions);
    app.use(bundler.middleware());
} else if (process.env.NODE_ENV === 'PROD') {
}
// routes should be handled by react router
app.use(express.static(path.join(__dirname, settings.PARCEL_DIST_DIR)));
app.get('/*', (req, res) => res.sendFile(path.resolve(`${settings.PARCEL_DIST_DIR}/index.html`)));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));