import React from 'react';

export default function AllergyButtons({setAllergies}) {

    const handleAddAllergy = (e) => {
        e.preventDefault();
        setAllergies(allergy => {
            return [
                ...allergy,
                {
                    "allergyName": "",
                    "medicament": ""
                }
            ];
        });
    }

    const handleResetAllergies = (e) => {
        e.preventDefault();
        setAllergies([]);
    }

    return (
        <>
            <button
                className="bg-green-600 hover:bg-green-700 duration-300 text-white shadow p-2 rounded-r mr-3 mb-5"
                onClick={handleAddAllergy}>
                Add
            </button>

            <button
                className="bg-green-600 hover:bg-green-700 duration-300 text-white shadow p-2 rounded-r"
                onClick={handleResetAllergies}>
                Reset
            </button>
        </>
    );
}