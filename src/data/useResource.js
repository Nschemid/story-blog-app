import { useState, useEffect } from 'react';

export const useResource = (url, defaultValue) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        console.log("On useResource")
        const loadResource = async () => {
            console.log("On loadResource")
            const response = await fetch(url);
            console.log("On response")
            console.log(response)
            const data = await response.json();
            setData(data);
            console.log(response);
        }

        loadResource();
    }, [url]);

    return data;
}