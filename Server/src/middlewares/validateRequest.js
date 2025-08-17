
// export const validateRequest = (schema) => (req, res, next) => {
//     const { error } = schema.validate(req.body);
//     if (error) {
//         return res.status(400).json({ message: error.details[0].message });
//     }
//     next();
// };


export const validateRequest = (schema) => (req, res, next) => {
    // Handle uploaded file path injection into req.body
    if (req.file && req.file.fieldname) {
        req.body[req.file.fieldname] = req.file.path;
    }

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

