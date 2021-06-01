
import { useState, useEffect } from 'react';
import axios from 'axios';
 
export default function newsArticles() {
    const [news, getNews] = useState('');

    useEffect(() => {
        getAllNews(); 
    }, [])

    const getAllNews = () => {
        axios.get('https://newsapi.org/v2/everything?q=music&sortBy=publishedAt&apiKey=45ed4bd96e5c4b8f9dd15cd2d1398dc7')
        .then((response) => {
            const allNews = response.data.news.allNews;
            getAllNews(allNews); 
        })
    }
}