import React, { Component } from 'react'
import GitHubCalendar from 'react-github-calendar';
import SkillBar from 'react-skillbars';
import Skillbars from './Skillbars'
export const SKILLS = [
  {type: "REACTJS", level: 70},
  {type: "REDUX", level: 60},
  {type: "JAVASCRIPT", level: 50},
  {type: "JQUERY", level: 50},
  {type: "BOOTSTRAP", level: 50},
  
];
const COLORS = {
  "bar": "#27a79a",
  "title": {
    "text": {
      "hue": 170,
      "saturation": {
        "minimum": 30,
        "maximum": 70
      },
      "level": 90
    },
    "background": {
      "hue": 170,
      "saturation": {
        "minimum": 30,
        "maximum": 70
      },
      "level": {
        "minimum": 20,
        "maximum": 20
      }
    }
  }
}
export default class Home extends Component {
  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/js/github-calendar.min.js";
    script.async = true;
    
    document.body.appendChild(script);
}
    render() {
        return (
            
        <div className="container main_container foo">
    <div className="content_inner_bg row m0">
      <section className="about_person_area pad" id="about">
        <div className="row">
          <div className="col-md-5">
            <div className="person_img">
              <img src="img/member/faisal.jpg" alt="" />
              <a className="download_btn" href="https://drive.google.com/open?id=1jACMDFdr-4LM55BEp4AvnqOTif_NfD5u" target="_blank"><span>Download Resume</span></a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row person_details">
              <h3><span>Faisal Abbas</span></h3>
              <h4>Looking for an Opportunity as ReactJs Developer</h4>
              <p>Since 2019, I have served as a Web Developer, I have been repeatedly recognized for
                developing innovative solutions for websites. I am
                responsible for full initial requirement gathering to design, coding,
                and implementation. I have developed efficiently projects using ReactJs and
                PHP Laravel
                and well known APIs. I am always open to the challenges in software development.</p>
              <div className="person_information">
                <ul>
                  <li>Location</li>
                  <li>Phone</li>
                  <li>Skype</li>
                  <li>Email</li>
                  <li>Website</li>
                </ul>
                <ul>
                  <li>Lahore, Pakistan</li>
                  <li><a href="tel:+923024096006">+923024096006</a></li>
                  <li><a href="https://join.skype.com/invite/oLsdDRytTeN5" target="_blank">live:faisalsandhu166</a></li>
                  <li><a href="mailto:faisalabbas.bscs@gmail.com"><span>faisalabbas.bscs@gmail.com</span></a></li>
                  <li><a href="https://faisalabbas.netlify.com/">www.faisalabbas.netlify.com</a></li>
                </ul>
              </div>
              <ul className="social_icon">
                <li><a href="https://github.com/Faisal700" target="_blank"><i className="fa fa-github" /></a></li>
                <li><a href="https://bitbucket.org/%7B7410d184-2d78-4ea6-97e8-5f726ded7b5b%7D/" target="_blank"><i className="fa fa-bitbucket" /></a></li>
                <li><a href="https://www.linkedin.com/in/faisal-sandhu-2a2254168/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://join.skype.com/invite/oLsdDRytTeN5" target="_blank"><i className="fa fa-skype" /></a></li>
                <li><a href="https://web.whatsapp.com/send?phone=923024096006" target="_blank"><i className="fa fa-whatsapp" /></a></li>
                <li><a href="https://stackoverflow.com/users/11026941/faisal-sandhu" target="_blank"><i className="fa fa-stack-overflow" /></a></li>
                <li><a href="https://web.facebook.com/faisal.fabian.3" target="_blank"><i className="fa fa-facebook" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="myskill_area pad" id="skill" S>
      <div className="main_title">
              <h2>My Skills</h2>
            </div>
            <div className="row ">
              <div className="col-md-6 wow fadeInUp">
                <div className="skill_text">
                  <h4>Web development Skills</h4>                 
                </div>
                <div >
                  <SkillBar  skills={SKILLS}  colors={COLORS}/>
                </div>
              </div>
                <div className="col-md-6 wow fadeInUp">
                  <div className="skill_text ">
                    <h4>{/* Web development Skills */}</h4>
                    
                  </div>
                  <div className="skill_item_inner" style={{marginTop: '25px'}}>
                  <Skillbars />
                  </div>
                </div>
              </div>
      </section>
      <section className="about_person_area pad" id="contirbutions">
        <div className="row">
          <div className="col-md-12">
            <a style={{textTransform: 'none'}} href="https://github.com/Faisal700" target="_blank">
              <div className="row person_details">
                <div className="calendar">
                <GitHubCalendar username="Faisal700" fullYear={false} blockSize={10} blockMargin={10}/> 
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="education_area pad" id="experience">
        <div className="main_title">
          <h2>Experience</h2>
        </div>
        <div className="education_inner_area">
          <div className="education_item wow fadeInUp animated" data-line="B">
          <h6>Oct 2019-Feb-2019</h6>
            <a target="_blank" href="https://wgroup.tech">
              <h4>Reactjs dev</h4>
            </a>
            <h5>W Group</h5>
          </div>
  
          <div className="education_item wow fadeInUp animated b_section" data-line="A">
            
            <h6>Jan 2019-Mar 2019</h6>
            <a target="_blank" href="https://www.technerds.com">
              <h4>Laravel Intern</h4>
            </a>
            <h5>TechNerds</h5>
          </div>
        </div>
        </section>
      <section className="education_area pad" id="project">
        <div className="main_title">
          <h2>Projects</h2>
        </div>
        <p>I worked on multiple projects, a complete project list will be sent to you on request.</p>
      </section>
      <section className="education_area pad" id="education">
        <div className="main_title">
          <h2>Education</h2>
        </div>
        <div className="education_inner_area">
          <div className="education_item wow fadeInUp animated" data-line="D">
          <h6>2019</h6>
            <a target="_blank" href="https://www.erozgaar.pitb.gov.pk">
              <h4>PHP Tech Domain(PITB)</h4>
            </a>
            <h5>PITB Punjab University Lahore</h5>
          </div>
          <div className="education_item wow fadeInUp animated" data-line="C">
          <h6>2014-2018</h6>
            <a target="_blank" href="http://www.lgu.edu.pk/">
              <h4>Bachelor of Computer Science (BSCS)</h4>
            </a>
            <h5>Lahore Garrison University, Main Campus</h5>
          </div>
          <div className="education_item wow fadeInUp animated b_section" data-line="B">
          <h6>2012-2014</h6>
            <a target="_blank" href="https://superiorcolleges.edu.pk/superior-college-hafizabad/">
              <h4>Higher Secondary School</h4>
            </a>
            <h5>Superior College Hafizabad</h5>
          </div>
          <div className="education_item wow fadeInUp animated a_section" data-line="A">
          <h6>2010-2012</h6>
            <a target="_blank" href="http://www.schoolinglog.com/school/MISALI-PUBLIC-SCHOOL-HAFIZABAD_181347.html">
              <h4>Secondary School</h4>
            </a>
            <h5>Misali Public School</h5>
          </div>
        </div>
      </section>
      <section className="contact_area pad" id="contact">
        <div className="main_title">
          <h2>Contact Me</h2>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="left_contact_details wow fadeInUp animated">
              <p>Feel free to get in touch with me. I am always open to discussing new projects, creative idea or opportunities to be part of your vision.</p>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="media-body">
                  <h4>Location</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-phone" />
                </div>
                <div className="media-body">
                  <h4>Skype</h4>
                  <p><a href="https://join.skype.com/invite/oLsdDRytTeN5" target="_blank">live:faisalsandhu166</a></p>
                </div>
              </div>
              <div className="media">
                <div className="media-left">
                  <i className="fa fa-envelope-o" />
                </div>
                <div className="media-body">
                  <h4>Email</h4>
                  <p><a href="mailto:faisalabbas.bscs@gmail.com"><span>faisalabbas.bscs@gmail.com</span></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

        )
    }
}
