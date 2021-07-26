import React from 'react';
import SocialButtonsPage from '../../components/SocialIcons';

const Home = () => {
    return (
        <div>
            <header className="header-home">
                <h1 className="name">Kirtana Mogili</h1>
                <h2>Student. Software Engineer. Dancer.</h2>
                <SocialButtonsPage/>
            </header>
            <div className="main-body">
                <h3>About</h3>
                <hr></hr>
                <h4>Let me introduce myself.</h4>
                <div className="container">
                    <body className="text">
                    Hello! My name is Kirtana Mogili, and let me tell you the story of how I discovered my interest in Software Engineering.<br></br>
                    <br></br>
                    “Karel the Dog” first introduced me to computer science. Karel lives in a grid world instructed by users to move and pick up tennis balls. I became friends with Karel the summer before my senior year of high school. Since I was unable to enroll in the only Computer Science class offered at my school, I found the summer assignment for the class and was introduced to Karel through <a className="weblink" href="https://codehs.com/">codeHS.com</a>. Thus, my coding journey had begun. I worked with Karel to develop beginner level coding skills. I eventually left Karel and started making small Java programs as simple as printing “Hello World!” to traversing through a list of data until I started my higher education at the Georgia Institute of Technology where I was exposed to a multiplex of resources. I learned from my peers who came from all over the world holding similar goals and aspirations as me. With these new connections, I participated in multiple hackathons, joined a programming team, and got involved with <a className="weblink" href="https://bitsofgood.org/">Bits of Good</a>, an organization that partners with local non-profits to volunteer technical resources such as web development.<br></br>
                    <br></br>
                    I hope to continue expanding my knowledge in computer science by experimenting with new technologies and gaining experience in the workforce.
                    </body>
                    <div className="frame">
                        <img alt="Profile" src="profile_pic.jpg" className="profilepic"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;