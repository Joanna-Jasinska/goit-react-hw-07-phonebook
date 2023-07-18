import axios from 'axios';

const baseURL =
  'https://64b65bbddf0839c97e156ae9.mockapi.io/phonebook/contacts';

const axiosIns = axios.create({ baseURL });

export const fetchContacts = async () => {
  const { data } = await axiosIns.get();
  return data;
};
