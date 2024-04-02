/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../../images/allbooks.jpg";

const imageAltText = "books and me";

/**
 * Project list
 *
 * An array of objects that will be used to display for your projeMyportfolioct
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " How I got sponserd by IIT Bombay",
    description:
      " A peek into how I got sponsered to visit Asisa's largest Technical Fest, Techfest, IIT Bombay. ",
    url: "  https://www.linkedin.com/feed/update/urn:li:activity:7144055678339330048/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7144055678339330048%29  ",
  },
  {
      title: " I took an oath to Solo Travel on my Birthdays! ",
    description:" I am a peoples' person, but taking an oath to solo travel on my birthdays has been a life changing experience.",
    url: "  https://www.linkedin.com/feed/update/urn:li:activity:7130266552183980032/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7130266552183980032%29  ",
  },
  {
    title: " My Smart India Hackathon Experience ",
    description:    "  The prestigous hackthon hosited by Government of India, was my first ever hackathon experience. Here's how it went.",
    url: "  https://www.linkedin.com/feed/update/urn:li:activity:7126864994893189120/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7126864994893189120%29  ",
  },
{ title: "  How to avoid distractions while studying ",
    description:
  "  Wrote this from personal experince, this blog is a guide to help you avoid distractions while studying.",
    url: "  https://higheredforall.in/blog-career-guidance/tips-to-avoid-distractions-while-studying/  ",
},
{
  title: "BYE BYE Stress and and Anxiety",
    description:"A guide to help students manage stress and anxiety in college, with tips and resources to help you through tough times.",
    url: "https://higheredforall.in/blog-career-guidance/manage-stress-and-anxiety-in-college/",
}

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
