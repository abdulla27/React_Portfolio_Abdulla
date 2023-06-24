import React from "react";
import "./portfolio.css";
import IMG1 from "../../asset/folio1.jpeg"
import IMG3 from "../../asset/folio3.jpeg"
import IMG4 from "../../asset/folio4.jpeg"
import IMG5 from "../../asset/folio5.jpeg"
import IMG6 from "../../asset/folio6.jpeg"
import IMG7 from "../../asset/folio7.jpeg"


const data=[
  {
    id:1,
    image: IMG1,
    title:"Crypto currency dashboard & financial visualization.",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
  },
  {
    id:2,
    image: IMG3,
    title:"Charts templates & infographics in figma.",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id:3,
    image: IMG4,
    title:"Figma dashboard UI kit for data design web apps.",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  {
    id:4,
    image: IMG5,
    title:"Maintaining tasks and tracking progress also.",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress"
  },
  {
    id:5,
    image: IMG6,
    title:"Charts templates & infographics in figma.",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id:6,
    image: IMG7,
    title:"Charts templates & infographics in figma.",
    github:"https://github.com",
    demo:"https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      { data.map(({id,image,title,github,demo})=>{
        return(
          <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />    
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className="btn" target="_blank">Github</a>
            <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
        </article>
        )

        })
      }
      </div>
    </section>
  )
}

export default Portfolio
