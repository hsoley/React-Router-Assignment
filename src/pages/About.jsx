// modules
import React from 'react';
// style
import '../assets/css/style.css';
// image used
import FutureImg from '../assets/images/future.jpeg';


class About extends React.Component {


    render() {
        return (
            <main className="mainContainer">
                <h2 className="pageTitle">About</h2>

                <img className="futureImg" src={FutureImg} alt="3 men in construction site, pointing to future"/>
                
                <section className="contentTxtWrapper">
                    {/* text taken from https://www.dufferinconstruction.com/about/ */}
                    <p className="contentTxt">We have sustained success through the strength and expertise of our people, providing innovative construction solutions to complex infrastructure projects across Canada for over 100 years.</p>
                    <p className="contentTxt">Whatever your project is, we have the experience to do it through our various contracting modes including general contracting/bid-build, CM/GC, design-build, design-bid-build and public-private partnerships.</p>
                    <p className="contentTxt">Our greatest competitive advantage is the expertise and passion of our people. We are motivated to achieve the elements needed to provide project success and build structures and roadways that will leave a lasting impression for our clients, our society and our communities.</p>
                </section>
            </main>
        );
    }

}

export default About;