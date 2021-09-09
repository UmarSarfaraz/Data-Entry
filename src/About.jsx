import React from "react";
import web from "../src/Images/twentyfour.PNG";
import fb from "../src/Images/twentyone.PNG";
import gh from "../src/Images/twentytwo.PNG";
import li from "../src/Images/twentythree.PNG";
import w from "../src/Images/one.PNG";
import e from "../src/Images/two.PNG";
import p from "../src/Images/three.PNG";
import ptw from "../src/Images/four.PNG";
import br from "../src/Images/five.PNG";








const About=()=>{
    return(
        <>
        <section id="headerabout" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1 id="About">About Me</h1>
                        <div className="about">
                        <h4>Hi,I am Umar Sarfaraz a data entry operator,Ms word,Excel,Powerpoint expert.</h4>
                        <h5>I have 2+years experience in this field.I can do tasks related to Ms word,Excel,Powerpoint.I can also convert the documents from word to PDF and vice versa.                  
                        My goal is to become a full expert in all office System like MS Visio,MS Access etc.
                        </h5>
                        {/* <h5 className="mt-1">I can create user interactive and fast loading responsive websites.</h5> */}
                        </div> 
                        <div className="mt-2">
                            <a href="https://www.upwork.com/freelancers/~0154ec8dacab36874f" target="_blank" className="btn btn-outline-primary">Hire Me</a>
                        
                            <a href="https://drive.google.com/file/d/1W-EmfDSrtEYzfxSdIIpXDfFii5bk7Poy/view?usp=drivesdk"
                             target="_blank" 
                            className="btn btn-outline-primary">View CV</a>
                        </div>
                        
                        <div className="icons">
                        <br/>
                        <h2 id="About">Social Links</h2>
                        <a href="https://www.facebook.com/profile.php?id=100044584922573" target="_blank">
                       <img src={fb}  className="fb" alt="Facebook"
                           
                       />
                       </a>
                       <a href="https://github.com/UmarSarfaraz" target="_blank">
                       <img src={gh} className="fb" alt="Github"/>
                       </a>
                       <a href="https://www.linkedin.com/in/umar-sarfaraz-6a740a219" target="_blank">
                       <img src={li} className="fb" alt="LinkedIn"/>
                       </a>

                       


                       </div>
                       <div className="exp">
                       <br/>
                        <h2 id="About">Expertise</h2>

                       <img src={w}  className="fb" alt="MS Word"/>
                       <img src={e} className="fb" alt="MS Excel"/>
                       <img src={p} className="fb" alt="MS Powerpoint"/>
                       <img src={ptw} className="fb" alt="PDF"/>
                       <img src={br} className="fb" alt="PDF to Word"/>


                       

                       </div>
                        
                       
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web} className="animated" alt="homeimg"/>
                    </div>
                   
                </div>
               
                </div>
               
            </div>

           
        </div>
       
      
        </section>

        </>
    );
};
export default About;