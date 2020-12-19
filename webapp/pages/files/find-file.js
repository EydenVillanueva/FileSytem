import React, {useState} from 'react';
import Layout from '../../components/layout/layout';
import {getFileById} from "../../components/file/helpers";
import Moment from 'moment';

export default function FindFileById() {

    const [fileId, setFileId] = useState('');
    const [foundFile, setFoundFile] = useState();

    Moment.locale('en');

    const handleFileId = (e) => {
        setFileId(e.target.value);
    }

    const handleSubmitFind = async (e) => {
        e.preventDefault();

        try {
            await getFileById(fileId, setFoundFile);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <Layout>
            <div className="p-8 justify-items-auto flex">
                <form onSubmit={handleSubmitFind}>
                    <input
                        className="bg-gray-200 shadow-inner rounded-1 p-2"
                        type="text"
                        name=""
                        id=""
                        value={fileId}
                        onChange={handleFileId}
                    />

                    <button
                        className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
                        type="submit"
                    >
                        Find
                    </button>
                </form>

                <div className="file-result">
                    {foundFile ? (
                        <>
                            <p>Patient Name: {foundFile.file.patientName}</p>
                            <p>File id: {foundFile.file.id}</p>
                            <p>Blood type: {foundFile.file.bloodType}</p>
                            <p>Created date: { Moment(foundFile.file.createdAt).format('d MMM YYYY')  }</p>

                            {foundFile.allegiesArray.map((allergy) => {
                                return (
                                    <>
                                        <p> {allergy.allergyName} </p>
                                        <p> {allergy.medicament} </p>
                                    </>
                                )
                            })}

                        </>
                    ) : (
                        <>
                        </>
                    )
                    }
                </div>
            </div>
        </Layout>
    );
}



