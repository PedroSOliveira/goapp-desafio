import axios from 'axios';

const BASE_URL = 'https://api-user-profile.herokuapp.com/users';

export const ServiceApiUsers = {

    createUser: async ({ nome, dataNascimento }) => {
        try {
            const response = await axios.post(`${BASE_URL}`, { nome, dataNascimento });

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllUsers: async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    editUser: async ({ id, nome, dataNascimento }) => {
        try {
            const response = await axios.put(`${BASE_URL}/edit/${id}`, { nome, dataNascimento });

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteUser: async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/delete/${id}`);

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },


};