import { createContext } from "react";
import img1 from './images/image1.png';
import img2 from './images/image2.png';
import img3 from './images/image3.png';
import img4 from './images/image4.png';
import img5 from './images/image5.png';
import { useState } from "react";
import { useContext } from "react";

export const NewsContext=createContext()

export const NewsProvider = ({ children }) => {
  const [newsFeeds, setNewsFeeds] = useState([
    { id: 1, title: 'Ambani wedding', category: 'Entertainment', imageUrl: img1, text:"The grand pre-wedding festivities of Anant Ambani and Radhika Merchant have captivated global attention for their exquisite celebration of Indian culture. The three-day event, set to host global leaders from all around the world",
    status: 'published' , CreationDate:'20-03-2024'},
    { id: 2, title: 'Zomato Founder Married', category: 'Entertainment', imageUrl: img2, text:"Deepinder Goyal Zomato founder recently made it to the headlines following reports of his marriage to Mexican model Grecia Munoz. As per the reports, Deepinder Goyal and Grecia got married a couple of months ago",
    status: 'published', CreationDate:'2-02-20204'},
    { id: 3, title: 'Bengaluru Water Crisis', category: 'Local', imageUrl: img3, text:"The city’s two major sources of water are Cauvery river and  borewells dug by BBMP. Bengaluru gets 1,450 MLD (million litres per day) of water from the Cauvery with an additional 400 MLD sourced through the public borewells.",
    status: 'published', CreationDate:'2-01-20204' },  
    { id: 4, title: 'Intervue', category: 'Technical', imageUrl: img4, text:"Intervue, startup founded in 2019, aims to make job interview process easiers. Intervue has completely streamlined technical interview process. According to Intervue, 70% of candidates they recommend are chosen by hiring companies.",
    status: 'published', CreationDate:'10-01-20204' },
    { id: 5, title: 'Chicken Pockets', category: 'Cooking', imageUrl: img5, text:"Chicken Pockets are made using fried bread and cut into pocket shaped. The pocket is filled with mayonnaise,onion first and then filled with chicken which is cooked using chicken,onion and some spices to add up the taste and served with ketchup.",
    status: 'published', CreationDate:'15-03-20204'},
  ]);


  const deleteNewsFeed = (id) => {
    setNewsFeeds(newsFeeds.filter(feed => feed.id !== id));
  };

  const editNewsFeed = (id, newData) => {
    setNewsFeeds(newsFeeds.map(feed => (feed.id === id ? { ...feed, ...newData } : feed)));
  };

  const addNewsFeed = (newFeed) => {
    setNewsFeeds([...newsFeeds, newFeed]);
  };

  
    return (
      <NewsContext.Provider value={{ newsFeeds,  deleteNewsFeed, editNewsFeed , addNewsFeed }}>
        {children}
      </NewsContext.Provider>
    )
  }


  export const useNewsFeed = () => {
    return useContext(NewsContext);
  };