import { axios } from "../../helpers";

export const registerFile = async values => {
    const { data: { result } } = await axios.post("/files/register-file", values);
    return result;
}

export const getFileById = async (id, setState) => {
    await axios.get(`/files/${id}`)
        .then(res => {
            const { data: { result } } = res;
            setState(result);
        });
}