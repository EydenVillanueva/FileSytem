const Allergy = require('../models/allergy');
const {retrieveAllergyObjects} = require('../util/allergy.util');
const {v4: uuidv4} = require('uuid');

module.exports = {
    registerAllergies: async (allergies, fileId) => {
        const allergiesInstances = retrieveAllergyObjects(allergies);

        return Promise.all(allergiesInstances.map(allergyInstance => {
            allergyInstance.id = uuidv4();
            allergyInstance.fileId = fileId;
            allergyInstance.save();
            return allergyInstance;
        }));
    },

    getAllergiesByFile: async (fileId) => {
        try{
            return await Allergy.findAll({
                attributes: ['id','allergyName', 'medicament'],
                where: { fileId: fileId },
                raw: true
            });
        }
        catch(error){
            console.error(error);
            throw new Error(error);
        }
    }
}