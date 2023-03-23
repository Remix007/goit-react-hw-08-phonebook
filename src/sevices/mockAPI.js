import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContactAPI = async data => {
  try {
    return axios.post('/contacts', data);
  } catch (error) {
    console.log(error);
  }
};
export const getContactsAPI = async () => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const removeContactAPI = async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
};
