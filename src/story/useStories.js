import { useState, useEffect } from 'react'

export const useStories = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [stories, setStories] = useState([]);

    const loadStories = async () => {
        const response = await fetch('/stories');
        const stories = await response.json();
        setStories(stories);
        setIsLoading(false);
        console.log(stories);
    }

    useEffect(() => {
        loadStories();
    }, [])

    return { isLoading, stories }
}
