import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "businessinsider",
        "name": "Business Insider"
      },
      "author": "Nathan Rennolds,George Glover",
      "title": "Chinese electric car maker BYD is about to steal Tesla's crown. Here's why it's winning the race.",
      "description": "China's BYD is almost certain to sell more electric cars worldwide in the final quarter of 2023 and take pole position over Tesla for the first time.",
      "url": "https://www.businessinsider.com/chinabydteslaelectriccarevrace202311",
      "urlToImage": "https://i.insider.com/6557973a4ca513d8242b7004?width=1200&format=jpeg",
      "publishedAt": "20231118T09:51:01Z",
      "content": "BYD's Seagull hatchback sells for the equivalent of just over $10,000.Aly Song/Reuters\r\n<ul><li>China is the world's biggest producer of electric vehicles.</li><li>BYD is expected to overtake Tesla a… [+4954 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "businessinsider.com",
      "title": "After the driver of a Tesla in Autopilot suffered a medical emergency, his 10yearold son was reportedly able to get the car off the freeway",
      "description": "Kevin Turen was driving a Tesla when he suffered a medical emergency. Alberto E. Rodriguez/WireImage/Getty Images \"Euphoria\" producer Kevin Turen suffered a medical emergency while driving his Tesla, TMZ reported. The car was reportedly using the Autopilot fe…",
      "url": "https://biztoc.com/x/e3033c1be1b6e6cd",
      "urlToImage": "https://c.biztoc.com/p/e3033c1be1b6e6cd/s.webp",
      "publishedAt": "20231118T09:40:08Z",
      "content": "Kevin Turen was driving a Tesla when he suffered a medical emergency.Alberto E. Rodriguez/WireImage/Getty Images\"Euphoria\" producer Kevin Turen suffered a medical emergency while driving his Tesla, T… [+287 chars]"
    },
    {
      "source": {
        "id": "businessinsider",
        "name": "Business Insider"
      },
      "author": "Beatrice Nolan",
      "title": "After the driver of a Tesla in Autopilot suffered a medical emergency, his 10yearold son was reportedly able to get the car off the freeway",
      "description": "\"Euphoria\" executive producer Kevin Turen was driving his Tesla when he suffered a medical emergency and died, TMZ reported.",
      "url": "https://www.businessinsider.com/teslaautopilotboyfreewaymedicalemergencykevintureneuphoria202311",
      "urlToImage": "https://i.insider.com/655786d822cf74a573993df2?width=1200&format=jpeg",
      "publishedAt": "20231118T09:31:01Z",
      "content": "Kevin Turen was driving a Tesla when he suffered a medical emergency.Alberto E. Rodriguez/WireImage/Getty Images\r\n<ul><li>\"Euphoria\" producer Kevin Turen suffered a medical emergency while driving hi… [+2048 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Biztoc.com"
      },
      "author": "reuters.com",
      "title": "Shortseller Jim Chanos to close hedge funds WSJ",
      "description": "Jim Chanos, Founder and Managing Partner of Kynikos Associates LP speaks at the Reuters Global Investment Outlook summit at the Thomson Reuters building in New York, November 19, 2013. REUTERS/Mike Segar/File Photo Acquire Licensing Rights Nov 17 (Reuters)  …",
      "url": "https://biztoc.com/x/4aa9b85443557826",
      "urlToImage": "https://c.biztoc.com/p/4aa9b85443557826/s.webp",
      "publishedAt": "20231118T09:08:13Z",
      "content": "Jim Chanos, Founder and Managing Partner of Kynikos Associates LP speaks at the Reuters Global Investment Outlook summit at the Thomson Reuters building in New York, November 19, 2013. REUTERS/Mike S… [+303 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      totalResults: 4,
      articles: this.articles,
      loading: false
    }
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center mb-3'>News Monkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (<div className="col-md-4">
              <NewsItem newsURL={element.url} title={element.title.slice(0, 40)+'...'} description={element.description.slice(0, 75)+'...'} imgURL={element.urlToImage} />
            </div>)
          })}
        </div>
      </div>
    )
  }
}

export default News