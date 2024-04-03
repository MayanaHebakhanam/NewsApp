import '../css/Home.css';
import { Link} from 'react-router-dom';
import img from "../images/news-icon.png" ;
import Card from '../pages/Card';
import '../css/Card.css';
import img1 from "../images/image1.png";
import img2 from '../images/image2.png';
import { useContext } from 'react';
import { NewsContext } from '../Context';
import SocialCard from '../pages/SocialCard';
import img4 from "../images/image4.png";
import img5 from '../images/image5.png';

export function Home(){

    const { newsFeeds} = useContext(NewsContext);

  
    return(
    <div class='container'>
    <div class="sidebar">
            <img class="image" src={img} />
            <h3 class="text">Hi, Admin</h3>
            <div class="navigation">   

                       <Link to='/'>Home</Link> <br/>
                       <Link to='/newsfeed'>Create News Feed</Link>  <br/>
                       <Link to='/manageFeed'>Manage News Feed</Link>  <br/> 
                       <Link to="/performanceReport">Performance Report</Link><br/>
            </div>
         </div>

    <div class="content">
      <h1 class="intro">Welcome to our News Page </h1>
       
       <div class="block-container">
        <div class="block">
           <h2 >Our Total Users</h2>
           <h3>1800</h3>
        </div>

        <div class="block">
          <h2 >Active Users</h2>
          <h3>550</h3>
        </div>

         <div class="block">
           <h2 >Todays Active Users</h2>
           <h3>300</h3>
         </div>

          <div class="block">
             <h2 >Inactive Users</h2>
              <h3>50</h3>
         </div>
         </div>

        <h2 class="heading">Top Featured News</h2>
        <div>
            {newsFeeds.map(feed =>(
                <Card imageUrl={feed.imageUrl} text={feed.text}/>
            ))}

        </div> 

        <h2 class="heading">Top Shared News</h2>

    <div>
          <Card
            imageUrl={img4}
            text="Intervue, startup founded in 2019, aims to make job interview process easiers. Intervue has completely streamlined technical interview process. According to Intervue, 70% of candidates they recommend are chosen by hiring companies."
            />
         
         <Card
            imageUrl={img5}
            text="Chicken Pockets are made using fried bread and cut into pocket shaped. The pocket is filled with mayonnaise,onion first and then filled with chicken which is cooked using chicken,onion and some spices to add up the taste and served with ketchup."/>
    </div> 

    <div>
        <SocialCard like={300} view={800} comment={99990}/>
        <SocialCard like={900} view={8000} comment={56780}/>
    </div>

    <h2 class="heading">Top Commented News</h2>

    <div>
          <Card
            imageUrl={img1}
            text="The grand pre-wedding festivities of Anant Ambani and Radhika Merchant have captivated global attention for their exquisite celebration of Indian culture. The three-day event, set to host global leaders from all around the world"
            />
        
         
         <Card
            imageUrl={img2}
            text="Deepinder Goyal Zomato founder recently made it to the headlines following reports of his marriage to Mexican model Grecia Munoz. As per the reports, Deepinder Goyal and Grecia got married a couple of months ago"/>
   
    </div> 
        <div>
        <SocialCard like={46700} view={2300} comment={27699940}/>
        <SocialCard like={940} view={700} comment={4982360}/>
    </div>
    </div>
    </div>
   
    )
}
