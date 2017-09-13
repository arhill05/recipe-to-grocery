exports.catchErrors = (fn) => {
    return function (req, res, next) {
        return fn(req, res, next).catch(next);
    };
};

exports.errorHandler = (err, req, res, next) => {
    console.error(err);
}
