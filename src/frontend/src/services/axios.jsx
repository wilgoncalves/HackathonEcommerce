import axios from 'axios';

export default axios.create({
    baseURL: 'https://tanacesta.azurewebsites.net/api/',
    headers: {
        "Content-Type": "application/json"
    }
});
