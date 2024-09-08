import axios from 'axios';

export default axios.create({
    baseURL: 'https://tanacesta.azurewebsites.net/swagger/index.html',
    headers: {
        "Content-Type": "application/json"
    }
});
