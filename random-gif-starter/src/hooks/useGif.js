import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = "kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {

    const [loading, setloading] = useState("false");
    const [gif, setgif] = useState('');

    async function fetchData(tag) {
        setloading(true);
        console.log(tag);
      
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        console.log(data);
        const imageSource = data.data.images.downsized_large.url;
        setloading(false);
        setgif(imageSource);
    }
    useEffect(() => {
        fetchData(tag);
    }, []);

    return [loading, gif, fetchData]
};

export default useGif;
