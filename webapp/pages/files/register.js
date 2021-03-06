import React, {useState} from 'react';
import Layout from '../../components/layout/layout';
import AllergyForm from '../../components/allergy/allergyForm';
import AllergyButtons from '../../components/allergy/allergyButtons';
import {bloodTypes} from '../../constant/bloodType';
import {registerFile} from '../../components/file/helpers';

export default function RegisterFile() {

    const [bloodType, setBloodType] = useState(bloodTypes[0]);
    const [patientName, setPatientName] = useState('');
    const [allergies, setAllergies] = useState([]);
    const [message, setMessage] = useState('');

    const handleSelectChange = (e) => {
        setBloodType(e.target.value);
    }

    const handlePatientName = (e) => {
        setPatientName(e.target.value);
    }

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        const values = {
            patientName,
            bloodType,
            allergies
        }
        try {
            const result = await registerFile(values);
            console.log(result);
            setMessage(`File successfully registered with id: ${result.fileSaved.id}`);
        } catch (e) {
            console.log(e);
            setMessage('Something went wrong when trying to store file..')
        }
    }

    return (
        <Layout>
            <div className="justify-items-auto flex">
                <form onSubmit={handleSubmitFile}>
                    <h3 className="text-3xl mb-6">Patient Information</h3>
                    <input
                        type="text"
                        className="bg-gray-200 shadow-inner rounded-1 p-2 mr-8"
                        id="patientName"
                        placeholder="Patient Name"
                        autoComplete="off"
                        value={patientName}
                        onChange={handlePatientName}
                        name="patientName"/>
                    <select
                        value={bloodType}
                        className="select-text"
                        onChange={handleSelectChange}>
                        {bloodTypes.map(type => (<option value={type} key={type}>{type}</option>))}
                    </select>

                    <h3 className="text-3xl mt-6 mb-6">Allergies</h3>

                    <div className="mt-6 mb-6">
                        {
                            allergies.map((allergy, index) => (
                                <AllergyForm
                                    setAllergies={setAllergies}
                                    allergy={allergy}
                                    index={index}
                                    key={index}
                                />
                            ))
                        }
                    </div>
                    <AllergyButtons setAllergies={setAllergies}/>
                    <hr/>
                    <button
                        className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r mt-5"
                        type="submit">
                        Register File
                    </button>
                </form>
                <p value={"message"}>
                    {message}
                </p>
            </div>
        </Layout>
    )
}