import React from 'react';

export default function AllergyForm({setAllergies, allergy, index}){

    const { allergyName, medicament } = allergy;

    const handleInputChange = ({ target }) => {
        setAllergies(allergies => {
            const newAllergies = Array.from(allergies);

            const allergy = newAllergies[index];
            allergy[target.name] = target.value;

            newAllergies[index] = allergy;

            return newAllergies;
        });
    }

    return (
        <div key={index}>
            <input
                type="text"
                className="bg-gray-200 shadow-inner rounded-1 p-2 mr-3 mb-1.5"
                placeholder="Allergy Name"
                autoComplete="off"
                name="allergyName"
                value={allergyName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                className="bg-gray-200 shadow-inner rounded-1 p-2"
                placeholder="Medicament"
                autoComplete="off"
                name="medicament"
                value={medicament}
                onChange={handleInputChange}
            />
        </div>
    );
}
