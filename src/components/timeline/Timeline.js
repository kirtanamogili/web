import { React, Component } from "react";
import './Timeline.css';

class Timeline extends Component {
    render () {
        return (
            <ul class="timeline">
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">IT Intern @ Ally</span>
                            <span class="time-wrapper"><span class="time">May 2021 - present</span></span>
                        </div>
                        <div class="desc">I worked on the C3 (Customer Care and Communication) team to help make improvements to Ally's Salesforce Lightning experience. I implemented the email-to-case functionality and designed custom Lightning Web Components to create a search/authenticate feature.</div>
                    </div>
                </li>
            
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="flag">HexLabs Marketing</span>
                            <span class="time-wrapper"><span class="time">May 2021 - Present</span></span>
                        </div>
                        <div class="desc">I did prospecting work, which involved contacting 1000+ companies as a team to find sponsors for Georgia Tech's annual 36-hour flagship hackathon. I performed other duties such as creating Grafana dashboards to analyze past statistics of our events and wrote a web scraping script that extracts company contact information.</div>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">Teaching Assistant</span>
                            <span class="time-wrapper"><span class="time">Aug 2020 - May 2021</span></span>
                        </div>
                        <div class="desc">I taught a 1-hour recitation period for CS1301, an introductory Python class, to help students gain a comprehensive understanding of the material. I also helped with grading homeworks/tests, creating study materials, and holding office hours.</div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="flag">SWE Intern @ Cryptyk</span>
                            <span class="time-wrapper"><span class="time">May - Aug 2020</span></span>
                        </div>
                        <div class="desc">I developed an Amazon Web Services (AWS) Lex Chatbot that acted as a medical reminder device for the elderly population due to an adherence issue among this demographic. I wrote AWS Lambda functions to control dialogue flow, created the sign-in/sign-up screen where users get inserted into an AWS Cognito user pool, and I integrated the chatbot into a React-Native application where data collected from the chat conversation gets recorded into a DynamoDB database.</div>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">Bits of Good Dev</span>
                            <span class="time-wrapper"><span class="time">Aug 2020 - Present</span></span>
                        </div>
                        <div class="desc">I am a web developer of Bits of Good, which is an organization that partners with local non-profits in the Atlanta area to make a meaningful impact with technical work. I worked with an organization called <a href="https://www.liv2bgirl.com/" class="weblink">Liv2BGirl</a> that provides a safe social platform for women.</div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="flag">Georgia Tech</span>
                            <span class="time-wrapper"><span class="time">Aug 2019 - Present</span></span>
                        </div>
                        <div class="desc">I am a third-year Computer Science Bachelor's student at the Georgia Institute of Technology with concentrations in Intelligence and Information Internetworks.</div>
                    </div>
                </li>
                <li>
                    <div class="direction-r">
                        <div class="flag-wrapper">
                            <span class="flag">Ardrey Kell HS</span>
                            <span class="time-wrapper"><span class="time">Aug 2015 - May 2019</span></span>
                        </div>
                        <div class="desc">I graduated high school ranked in the top 5 of my class of 850+ students.</div>
                    </div>
                </li>
                <li>
                    <div class="direction-l">
                        <div class="flag-wrapper">
                            <span class="flag">CTE Intern @ CMS</span>
                            <span class="time-wrapper"><span class="time">Aug - May 2019</span></span>
                        </div>
                        <div class="desc">I worked as a Technical Education intern for my local school district, Charlotte Mecklenburg Schools (CMS), where I delivered professional development resources for Career and Technical Education (CTE) teachers and researched how to better leverage social media and Canvas, the learning management system, in the classroom. I also developed resources that expose students of low-income families to career choices and associated job skills.</div>
                    </div>
                </li>
            </ul>
        )
    }
}
    
export default Timeline