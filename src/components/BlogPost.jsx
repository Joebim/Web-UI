import React from 'react'

export default function BlogPost() {
  return (
    <>
        <body>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <img src="./images/interior.jpg" alt=""></img>
            </div>
            <div class="card-body">
                <span class="tag tag-teal">Technology</span>
                <h4>why does interior designers spend so much time</h4>
                <p>An exploration into the world of interior design.</p>

                <div class="user">
                    <img src="./images/avatar1.jpeg" alt="" height="100" width="100"></img>
                    <div class="user-info">
                        <h5>Carrie Brewer</h5>
                        <small>2h ago</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <img src="./images/interior2.jpg" alt=""></img>
            </div>
            <div class="card-body">
                <span class="tag tag-deal">design</span>
                <h4>Do you wish to know what secrets lies in interior decor</h4>
                <p>let's dive into the world of design.</p>

                <div class="user">
                    <img src="./images/avatar5.jpeg" alt="" height="100" width="100"></img>
                    <div class="user-info">
                        <h5>carthy jones</h5>
                        <small>4h ago</small>
                    </div>
                </div>
            </div>
        </div> 
        <div class="card">
            <div class="card-header">
                <img src="./images/tree.jpg" alt=""></img>
            </div>
            <div class="card-body">
                <span class="tag tag-feel">flowers</span>
                <h4>what is the idea behind flowers and how it blends into the background</h4>
                <p>you might just be startled at the work of nature.</p>

                <div class="user">
                    <img src="./images/avatar3.jpeg" alt="" height="100" width="100"></img>
                    <div class="user-info">
                        <h5>lindy lawson</h5>
                        <small>yesterday</small>
                    </div>
                </div>
            </div>
        </div>     
    </div>
</body>
    </>
  )
}
