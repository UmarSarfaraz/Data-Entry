import React from "react";
import web from "../src/Images/thirteen.PNG";
import netflix from "../src/Images/fifteen.PNG";
import clock from "../src/Images/fourteen.PNG";
import todoList from "../src/Images/twelve.PNG";
import temp from "../src/Images/eighteen.PNG";
import quiz from "../src/Images/seventeen.PNG";


const Projects=()=>{
    return(
        <>
       <div className="my-5">
        <h3 className=" text-center">Some of Project Samples</h3>
        </div>
        <div className="container-fluid mb-5">
            <div className="row gy-4">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp" >
                <img src={web} id="cardimgp" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">MS Word Documentation</h5>
     <p class="card-text">My Final year project documentation in MS Word.<br/>
     Responsive Design</p>
       {/* <a href="https://umarsarfaraz.github.io/Awesomecalculator/" target="_blank"
        class="btn btn-outline-primary">Launch</a>   */}
  <a href="https://docs.google.com/document/d/1In8ZmoQGHD9BII5kygVmmpzO1FZgq0iy/edit?usp=drivesdk&ouid=112971100749358621859&rtpof=true&sd=true" 
  target="_blank"  class="btn btn-outline-primary">See document</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp" >
                <img src={netflix} id="cardimgp"class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Data entry in Excel file</h5>
     <p class="card-text">Final Data(marks,grades) of students in excel file.

     </p>
       {/* <a href="https://drive.google.com/file/d/1vm0hPJ2wnGvKLMeEE5WiHYaC4LRnDGbN/view?usp=sharing"
        target="_blank" class="btn btn-outline-primary">Watch Demo</a> */}
       <a href="https://docs.google.com/spreadsheets/d/1LupO3BMUUZAj-jDsYuC0cAbku1tzTUca/edit?usp=drivesdk&ouid=112971100749358621859&rtpof=true&sd=true"
        target="_blank" 
       class="btn btn-outline-primary">See Excel File</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp">
                <img src={todoList} id="cardimgc" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">MS Powerpoint presentation</h5>
     <p class="card-text">My final year project presentation in MS Powerpoint.
           </p>
       {/* <a href="https://drive.google.com/file/d/1iZrIxK_i3GzGfPuYJcznTgT5GPDoRyJR/view?usp=sharing"
        target="_blank" class="btn btn-outline-primary">Watch Demo</a> */}
       <a href="https://docs.google.com/presentation/d/1sqPVXSHjBCaMHCq30-VdvXMhrWSN7E9M/edit?usp=drivesdk&ouid=112971100749358621859&rtpof=true&sd=true"
        target="_blank"
        class="btn btn-outline-primary">See PPT File</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="cardp">
                <img src={clock}  id="cardimgc" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">PDF File</h5>
     <p class="card-text">My final year project documentation in PDF File.
     </p>
       {/* <a href="https://drive.google.com/file/d/17uDvyVeeFCLonNYlglGYJRzM7YaP7H6n/view?usp=sharing"
        target="_blank" class="btn btn-outline-primary">Watch Demo</a> */}
       <a href="https://drive.google.com/file/d/1IYjKIy3AlHKai1tDYPtAFr8RYI9cfFkd/view?usp=drivesdk"
        target="_blank"
         class="btn btn-outline-primary">See PDF File</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto"id="image">
                        <div class="card"id="cardp" >
                <img src={clock} id="cardimgp" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Word to PDF</h5>
     <p class="card-text">A word file which is converted into PDF file.</p>
       {/* <a href="https://umarsarfaraz.github.io/temperatureConverter/" 
       target="_blank" class="btn btn-outline-primary">Launch</a> */}
       <a href="https://drive.google.com/file/d/1IYjKIy3AlHKai1tDYPtAFr8RYI9cfFkd/view?usp=drivesdk" 
       target="_blank"  class="btn btn-outline-primary">See PDF File</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card"id="cardp" >
                <img src={web} id="cardimgc" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">PDF to Word</h5>
     <p class="card-text">A PDF file which is converted into word file     </p>
       {/* <a href="https://umarsarfaraz.github.io/awesomeQuizApp/"
        target="_blank" class="btn btn-outline-primary">Launch</a> */}
       <a href="https://docs.google.com/document/d/1In8ZmoQGHD9BII5kygVmmpzO1FZgq0iy/edit?usp=drivesdk&ouid=112971100749358621859&rtpof=true&sd=true" 
       target="_blank" class="btn btn-outline-primary">See Word File</a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
};
       

export default Projects;