import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src='https://mayflower.s3.amazonaws.com/ellenphoto.jpg' alt="Ellen Liang Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
                    Dedicated proficient with 6 years of experience in Web
                    Technologies and user interfaces using HTML5, DOM, CSS,
                    SCSS, Bootstrap, JavaScript, React, jQuery, NodeJS, Webpack,
                    Typescript, React Hook.
                </p>
                <p>
                    Experience in implementing Component life cycle
                    architecture, store actions, using socket.io in React-Redux
                    app to handle real-time data. • Experienced with the redux
                    including Store, Provider, Reducer and Action to achieve a
                    high-level state management feature. • Used redux reselector
                    to avoid recomputing data and improve the redux performance
                    efficiency. • Experienced with SCSS such as variables,
                    nested syntax, mixins, loops, thus implementing the UI style
                    efficiently.
                </p>
                <p>
                    Experienced in implementing Enterprise Applications with a
                    full life cycle of software development using Agile and
                    Waterfall models. • Excellent goal-oriented team Player,
                    quick learner, and self-starter with effective
                    communication, motivation, and organizational skills
                    combined with attention to details and business process
                    improvements.
                </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
