import React from 'react'

export class Register extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
    return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
             <div className="form">
                 <div className="form-group">
                     <label htmlFor="username">Username</label>
                     <input type="type" name="username" placeholder="Username"/>
                     </div>
                     <div className="form-group">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" placeholder="Email"/>
                     </div>
                     <div className="form-group">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" placeholder="Password"/>
                     </div>
                     <div className="form-group">
                     <label htmlFor="password">Confirm Password</label>
                     <input type="password" name="password" placeholder="Confirm password"/>
                     </div>
                 </div>
             </div> 
             <div className="footer">
                 <button type ="button" className="btn">Register</button>
             </div>
        </div>
    )
    }
}
