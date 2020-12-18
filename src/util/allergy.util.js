const Allergy = require('../models/allergy');

exports.retrieveAllergyObjects = (allergies) => {
    return allergies.map(allergy => {
        return Allergy.build(allergy)
    })
}
