import React from "react";
import foto_miguel from "../../images/foto_miguel.jpg";


const About = () => (        
    <React.Fragment>
        <section className="content-about">
            <div className="about-me">
                    <img width="50%" height="450" src={foto_miguel } />            
                    <div className="about-text">
                        <h2>Sobre Mim</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis est dui. In id justo id orci ullamcorper sollicitudin. Pellentesque eget dui elementum risus posuere 
                            mollis. Vestibulum nisl arcu, maximus sed mi eget, elementum tempor augue. Vestibulum euismod rhoncus leo et pharetra. Suspendisse pellentesque dapibus tortor. Praesent 
                            varius sem purus, non consectetur sapien facilisis quis. Sed euismod tortor diam, ac imperdiet ligula posuere eu. Pellentesque molestie sit amet felis vitae dapibus. 
                            Morbi iaculis lacinia condimentum. Aenean malesuada tempor vulputate. Proin nunc elit, dictum tempor sagittis eu, pharetra porta ligula. Suspendisse at lacus eu elit rutrum 
                            luctus eu eget erat. Donec massa dui, finibus in maximus id, finibus at urna.
                        </p>
                            
                        <p>
                            In vitae eros nunc. Proin aliquam varius odio eget tempus. Nam et gravida arcu, at varius nulla. Vestibulum convallis eget arcu non mollis. Pellentesque ipsum massa, 
                            dignissim at metus ac, cursus porta nulla. Praesent elementum ipsum euismod neque facilisis vulputate. Vestibulum metus nisl, elementum et metus eget, imperdiet luctus dui. 
                            Vestibulum sed dui nulla. Vestibulum posuere fringilla pretium. Proin eu ligula nec arcu feugiat lobortis. Maecenas porttitor euismod tempus.
                        </p>
                    </div>
            </div>
        </section>
    </React.Fragment>
);


export default About;