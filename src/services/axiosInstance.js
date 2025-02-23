import axios from "axios";

export const a = axios.create({
    baseURL: 'https://testappcrudify.pythonanywhere.com/api/v1'
})