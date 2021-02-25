import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID vngT-KQ6B4qm6wb2RK1y5iTKHBDkcBBka4EGKjW5H1M",
      },
});