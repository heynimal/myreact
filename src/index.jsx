import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
{
    id: 1,
  name: 'Facebook',
  founded: 'February 2004, Cambridge, Massachusetts, United States',
  founder: 'Mark Zuckerberg',
  headquarters: 'Menlo Park, California, United States',
  media:'https://terricole.com/wp-content/uploads/2013/11/official-facebook-logo-slide.jpg',
  about: 'This is the biggest social media network on the Internet, both in terms of total number of users and name recognition. Founded on February 4, 2004, Facebook has within 12 years managed to accumulate more than 1.59 billion monthly active users and this automatically makes it one of the best mediums for connecting people from all over the world with your business. It is estimated that more than 1 million small and medium-sized businesses use the platform to advertise their business.'

},
{
    id: 2,
    name: 'Twitter',
    founded:'July 15, 2006',
    founder: 'Jack Dorsey',
    headquarters: 'San Francisco, California, United States',
    media: 'http://dsim.in/blog/wp-content/uploads/2016/10/twitter-1.png',
    about: 'You might be thinking that limiting your posts to 140 characters is no way to advertise your business, but you will be shocked to know that this social media platform has more than 320 million active monthly users who make use of the 140 character limit to pass on information. Businesses can use Twitter to interact with prospective clients, answer questions, release latest news and at the same time use the targeted ads with specific audiences. Twitter was founded on March 21, 2006, and has its headquarters in San Francisco, California.'

},
{
    id: 3,
    name:  'LinkedIn',
    Founded:'2002, Mountain View, California, United States',
    founder: 'Jeff Weiner',
    headquarters: 'Sunnyvale, California, United States',
    media: 'https://media.wired.com/photos/592681fc8d4ebc5ab806a856/master/pass/LinkedIn_HP.jpg',
    about:  'Founded on December 14, 2002, and launched 0n May 5, 2003, LinkedIn is hands-down the most popular social media site for professional networking. The website is available in 24 languages and has over 400 million registered users. LinkedIn is great for people looking to connect with people in similar industries, networking with local professionals and displaying business related information and statistics.'
},
{
    id: 4,
    name: 'Google+',
    founded: 'June 28, 2011',
    founder: 'Vic Gundotra, Bradley Horowitz',
    Headquarters: 'Ford',
    media: 'https://i-cdn.phonearena.com/images/articles/315025-thumb/google-plus-new-android-version.jpg',
    about: 'While it’s no Twitter, Facebook or LinkedIn, Google+ has its place among the popular social media sites. Its SEO value alone makes it a must-use tool for any small business. Launched on December 15, 2011, Google+ has joined the big leagues registering 418 active million users as of December 2015.'
},
{
    id: 5,
    name: 'Instagram',
    founded: 'October 6, 2010',
    founder: 'Facebook, Inc',
    headquarters: 'Dodge',
    media: 'https://i-cdn.phonearena.com/images/articles/315025-thumb/google-plus-new-android-version.jpg',
    about: 'While it’s no Twitter, Facebook or LinkedIn, Google+ has its place among the popular social media sites. Its SEO value alone makes it a must-use tool for any small business. Launched on December 15, 2011, Google+ has joined the big leagues registering 418 active million users as of December 2015.'
}
];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/Sites" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/Sites/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
