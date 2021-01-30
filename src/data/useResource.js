import { useState, useEffect } from 'react';

export const useResource = (url, defaultValue) => {
    const [data, setData] = useState(defaultValue);

    useEffect(() => {
        const loadResource = async () => {
            const response = await fetch(url);
            console.log(response)
            const data = await response.json();
            setData(data);
            console.log(response);
        }

        loadResource();
    }, [url]);

    return [data];
}