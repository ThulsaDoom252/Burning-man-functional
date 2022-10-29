import React from 'react';
import image1 from "../image/img1.jpg";
import image2 from "../image/img2.jpg";
import image3 from "../image/img3.jpg";

function Section(props) {
    return (
        <section className="section">
            <div className="container section-container">
                <h1 className="content-title">About the event</h1>
                <div className="description">
                    <div className="desc-left">
                        <h1>Rebuilding the society</h1>
                        <p>Burning Man is a network of people inspired by the values reflected in the Ten Principles
                            and united
                            in the pursuit of a more creative and connected existence in the world. Throughout the
                            year we work
                            to build Black Rock City, home of the largest annual Burning Man gathering, and nurture
                            the
                            distinctive culture emerging from that experience. </p>
                    </div>
                    <div className="desc-right">
                        <h1>This drives us</h1>
                        <p>Burning Man Project will bring experiences to people in grand, awe-inspiring and joyful
                            ways that
                            lift the human spirit, address social problems, and inspire a sense of culture,
                            community, and civic
                            engagement. Burning Man provides infrastructural tools and frameworks to support local
                            communities
                            in applying the Ten Principles through six interconnected program areas, including Arts,
                            Civic
                            Involvement, Culture, Education, Philosophical Center, and Social Enterprise.</p>
                    </div>
                </div>
                <div className="images-container">
                    <img className="images" src={image1} alt="image1"/>
                    <img className="images" src={image2} alt="image2"/>
                    <img className="images" src={image3} alt="image3"/>
                </div>
            </div>
        </section>
    );
}

export default Section;