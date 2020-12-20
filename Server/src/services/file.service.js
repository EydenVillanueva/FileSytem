const File = require('../models/file');
const allergyService = require('../services/allergy.service');
const {v4: uuidv4} = require('uuid');

module.exports = {
    registerFile: async (body) => {
        const patientName = body.patientName;
        const bloodType = body.bloodType;
        const rawAllergies = body.allergies;

        const fileInstance = File.build({
            patientName: patientName,
            bloodType: bloodType,
            id: uuidv4()
        });

        try{
            const fileSaved = await fileInstance.save();
            const allergiesSaved = await allergyService.registerAllergies(rawAllergies, fileSaved.id);

            return {
                fileSaved,
                allergiesSaved
            };
        }
        catch(error){
            throw new Error(error);
        }
    },

    getFileById: async (fileId) => {
        try{
            const file = await File.findByPk(fileId);

            if(file === null) return { 'message' : 'File with the given id not found'};

            const allergiesArray = await allergyService.getAllergiesByFile(fileId);

            return {
                file,
                allergiesArray
            };
        }
        catch(error){
            throw error;
        }

    },

    existFileWithId: async (fileId) => {
        try {
            const file = await File.findByPk(fileId);

            if(file === null) return { 'message' : 'File with the given id not found'};

            return file;
        }
        catch(error){
            throw error;
        }
    }
}