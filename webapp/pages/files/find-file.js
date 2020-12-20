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
            if(fileId !== ''){
                await getFileById(fileId, setFoundFile);
            }
            else{
                setFoundFile();
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Layout>
            <div className="justify-items-auto flex-col ">
                <h3 className="text-3xl mb-6 mx-8">Type and Id</h3>
                <form onSubmit={handleSubmitFind}>
                    <input
                        className="bg-gray-200 shadow-inner rounded-1 p-2 mr-5"
                        type="text"
                        name=""
                        id=""
                        value={fileId}
                        onChange={handleFileId}
                    />
                    <button
                        className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r"
                        type="submit">
                        Find
                    </button>
                </form>
            </div>
            <div className="container md mt-8">
                {foundFile ? (
                    <>
                        <p>Patient Name:
                            <span className="text-blue-500 ml-3">
                                {foundFile.file.patientName}
                            </span>
                        </p>
                        <p>File Id:
                            <span className="text-blue-500 ml-3">
                                {foundFile.file.id}
                            </span>
                        </p>
                        <p>Blood Type:
                            <span className="text-blue-500 ml-3">
                                {foundFile.file.bloodType}
                            </span>
                        </p>
                        <p>Created Date:
                            <span className="text-blue-500 ml-3">
                                {Moment(foundFile.file.createdAt).format('d MMM YYYY')}
                            </span>
                        </p>
                        <ul  className="mt-5">
                            <h4 className="text-xl">Allergies:</h4>
                            {foundFile.allergiesArray.map((allergy) => {
                                return (
                                    <li key={allergy.id} className="mb-3">
                                        <p className="text-blue-500"> {allergy.allergyName} </p>
                                        <p className="text-blue-500"> {allergy.medicament} </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </>
                ) : (<></>)}
            </div>
        </Layout>
    );
}



