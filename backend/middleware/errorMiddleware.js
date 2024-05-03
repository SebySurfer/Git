const { response } = require("express")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500

    res.json({
        message: err.message, 
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    }
    )
}

app.use(errorHandler);
