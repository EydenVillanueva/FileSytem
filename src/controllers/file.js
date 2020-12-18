
exports.registerFile = (req, res) => {

    res.json({
        "File registration succeeded !": "This is a test"
    });
}

exports.getFileById = (req, res) => {
    res.json({
       "File by Id !": req.params.fileId
    });
}



