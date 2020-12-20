const fileService = require('../../services/file.service');
const {validationResult} = require('express-validator');

exports.updateVisitedFile = (req, res) => {
    const fileId = req.params.fileId;

    if(!fileId){
        return res.status(400).json({
            "message": "File id not found",
            "result": [],
            "status": 404,
        });
    }

    fileService.existFileWithId(fileId)
        .then( async file => {
            file.lastVisited = new Date();
            await file.save();
            res.status(200).json({
                "message": "File successfully updated",
                "result": file,
                "status": 200,
            });
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({error});
        })
}

exports.registerFile = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    fileService.registerFile(req.body)
        .then(result => {
            res.status(200).json({
                "message": "File successfully created!",
                "result": result,
                "status": 200
            });
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({error});
        });
}

exports.getFileById = (req, res) => {

    const fileId = req.params.fileId;

    if(!fileId){
        return res.status(400).json({
            "message": "File id not found",
            "result": [],
            "status": 404,
        });
    }

    fileService.getFileById(fileId)
        .then(result => {
            res.status(200).json({
               "message": "File successfully retrieved!",
                "result": result,
                status: 200
            });
        })
        .catch(error => {
           console.error(error);
           res.status(400).json({error});
        });

}



