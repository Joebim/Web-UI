import React from 'react'
import styles from './../styles/BlogPost.scss'; 
import interior from "./../assets/images/interior.jpg"
import interior2 from "./../assets/images/interior2.jpg"
import tree from "./../assets/images/tree.jpg"
import avatar3 from "./../assets/images/avatar3.jpeg"
import avatar5 from "./../assets/images/avatar5.jpeg"
import avatar1 from "./../assets/images/avatar1.jpeg"

export default function BlogPost() {
  return (
    <>
    <div className="containerblog">
        <div className="cardblog">
            <div className="card-header">
                <img src={interior} alt=""></img>
            </div>
            <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h4>why does interior designers spend so much time</h4>
                <p>An exploration into the world of interior design.</p>

                <div className="user">
                    <img src={avatar1} alt="" height="100" width="100"></img>
                    <div className="user-info">
                        <h5>Carrie Brewer</h5>
                        <small>2h ago</small>
                    </div>
                </div>
            </div>
        </div>
        <div className="cardblog">
            <div className="card-header">
                <img src={interior2} alt=""></img>
            </div>
            <div className="card-body">
                <span className="tag tag-deal">design</span>
                <h4>Do you wish to know what secrets lies in interior decor</h4>
                <p>let's dive into the world of design.</p>

                <div className="user">
                    <img src={avatar5} alt="" height="100" width="100"></img>
                    <div className="user-info">
                        <h5>carthy jones</h5>
                        <small>4h ago</small>
                    </div>
                </div>
            </div>
        </div> 
        <div className="cardblog">
            <div className="card-header">
                <img src={tree} alt=""></img>
            </div>
            <div className="card-body">
                <span className="tag tag-feel">flowers</span>
                <h4>what is the idea behind flowers and how it blends into the background</h4>
                <p>you might just be startled at the work of nature.</p>

                <div className="user">
                    <img src={avatar3} alt="" height="100" width="100"></img>
                    <div className="user-info">
                        <h5>lindy lawson</h5>
                        <small>yesterday</small>
                    </div>
                </div>
            </div>
        </div>     
    </div>
    </>
  )
}
