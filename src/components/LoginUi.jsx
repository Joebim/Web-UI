import React from 'react'

export default function LoginUi() {
  return (
    <>
    <body>
    <div class="container">
        <form>
           <button class="btn btn-ghost">
               <img src="./images/google.png" alt="" height="50" width="50"></img>
               Log in with Google
           </button>

           <small>or</small>

           <div class="form-control">
               <label for="email">Email</label>
               <input type="email" id="email" placeholder="Enter your email"></input>
           </div>

           <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="password"></input>
           </div>

            <div class="checkbox-container">
                <input type="checkbox" id="remember"></input>
                <label for="remember">Remember me</label>

                <a href="#">Forgot Password</a>
            </div>

            <button class="btn">Log in</button>

            <small>Don't have an account? <a href="#">Sign up</a></small>
        </form>

        <div class="features">
            <div class="feature">
                <i class="fas fa-code"></i>
                <h3>Development</h3>
                <p>A modern and clean design system for developing fast and powerful</p>
                
            </div>
            <div class="feature">
                <i class="fas fa-gift"></i>
                <h3>Features</h3>
                <p>A modern and clean design system for developing fast and powerful</p>
                
            </div>
            <div class="feature">
                <i class="fas fa-edit"></i>
                <h3>Updates</h3>
                <p>A modern and clean design system for developing fast and powerful</p>
                
            </div>
        </div>

    </div>
</body>
    </>
  )
}
