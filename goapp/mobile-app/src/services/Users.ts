import axios from 'axios';

const BASE_URL = 'https://api-user-profile.herokuapp.com/users';

interface IUserData {
    nome: string,
    dataNascimento: string
}

interface Props extends IUserData {
    id: any
}

export const ServiceApiUsers = {

    createUser: async ({ nome, dataNascimento }: IUserData) => {
        try {
            const response = await axios.post(`${BASE_URL}`, { nome, dataNascimento });

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    getAllUsers: async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    editUser: async ({ id, nome, dataNascimento }: Props) => {
        try {
            const response = await axios.put(`${BASE_URL}/edit/${id}`, { nome, dataNascimento });

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    deleteUser: async ({ id }: Props) => {
        try {
            const response = await axios.delete(`${BASE_URL}/delete/${id}`);

            return response;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },


};