import React from "react";
import web from "../src/Images/six.PNG";
import lp from "../src/Images/seven.PNG";
import resw from "../src/Images/eight.PNG";
import bm from "../src/Images/nine.PNG";
import psd from "../src/Images/ten.PNG";
import wp from "../src/Images/eleven.PNG";

const Services=()=>{
    return(
        <>
        <div className="my-5">
        <h3 className=" text-center">Services I Provide</h3>
        </div>
        <div className="container-fluid mb-5">
            <div className="row gy-4">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className="col-md-4 col-10 mx-auto" id="image" >
                        <div class="card" id="card" >
                <img src={web} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">MS Word</h5>
     <p class="card-text">I can do any type pf tasks related to microsoft word.</p>
       <a href="https://www.upwork.com/freelancers/~0154ec8dacab36874f" 
       target="_blank"  class="btn btn-outline-primary" id="btnp">Hire me for Ms Word tasks</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={lp} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">MS Excel</h5>
     <p class="card-text"> I can do data entry,formulas end tasks related to microsoft excel.
   .</p>
       <a href="https://www.upwork.com/freelancers/~0154ec8dacab36874f"
       target="_blank"  class="btn btn-outline-primary" id="btnp">Hire me for Ms Excel tasks</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card">
                <img src={resw} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">MS Powerpoint</h5>
     <p class="card-text">I can do any type of powerpoint presentation related to any topics.</p>
       <a href="https://www.upwork.com/freelancers/~0154ec8dacab36874f" 
       target="_blank"  class="btn btn-outline-primary" id="btnp">Hire me for Ms Powerpoint tasks</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={bm}  id="cardimg"class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">PDF</h5>
     <p class="card-text">I can make any type of pdf files.</p>
       <a href="https://www.upwork.com/freelancers/~0154ec8dacab36874f"
       target="_blank"  class="btn btn-outline-primary" id="btnp">Hire me for PDF tasks</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={psd} id="cardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">PDF to word</h5>
     <p class="card-text">I can convert any type of PDF files to word document.</p>
       <a href="https://www.upwork.com/freelancers/~0154ec8dacab36874f"  target="_blank" 
       class="btn btn-outline-primary" id="btnp">Get PDF to Word tasks</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-10 mx-auto" id="image">
                        <div class="card" id="card" >
                <img src={wp} id="wcardimg" class="card-img-top" alt="..."/>
                     <div class="card-body">
                        <h5 class="card-title">Word to PDF</h5>
     <p class="card-text">I can convert any type of word documents easily into PDF format.</p>
       <a href="https://www.upwork.com/freelancers/~0154ec8dacab36874f" target="_blank" 
       class="btn btn-outline-primary" id="btnp">Get Word to PDF tasks</a>
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
export default Services;