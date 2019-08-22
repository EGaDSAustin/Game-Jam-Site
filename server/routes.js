const express = require('express');

const router = express.Router();

const formRouter = require("./routes/form");
router.use('/form', formRouter);

router.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = router;