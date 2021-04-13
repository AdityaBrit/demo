import React from "react";
import {Link} from "react-router-dom";
import Details from './Details'

import CallIcon from '@material-ui/icons/Call';

export default class RandomUser extends React.Component {
    constructor(){
        super ();
       this. state = {
       
        message:"this is the problem",
        loading: true,
        people: [], 
                                          
    };
}

    async componentDidMount() {
        // const url = "https://api.randomuser.me/?results=50";
        const url = "https://dev.perfectprof.com/api/search";

        const response = await fetch(url);
        const data = await response.json();
       
        this.setState({ people: data.data, loading: false });
    }

    // changeUnit(item){
    //     this.setState({unit:item})
    // }

    render()
    
   
      
    {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.people.length) {
            return <div>didn't get a person</div>;

           
        }

    

        // const peopleJsx = [];

        // this.state.people.forEach(person => {
        //   peopleJsx.push(
        //     <div key={person.name.first + person.name.last}>
        //       <div>{person.name.title}</div>
        //       <div>{person.name.first}</div>
        //       <div>{person.name.last}</div>
        //       <img src={person.picture.large} />
        //     </div>
        //   );
        // });

        const { message } = this.state;


        return (
            //   <div>
            //     {this.state.people.map(person => (
            //       <div key={person.professional.first_name + person.professional.last_name}>
            //         <div>{person.name.title}</div>
            //         <div>{person.name.first}</div>
            //         <div>{person.name.last}</div>
            //         <img src={person.picture.large} />
            //       </div>
            //     ))}
            //   </div>

             

             
                 <div>                   
                 <div class="navbar">
                  <a class="logo" href="#"> Saffron</a>
                   <ul class="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Service</a></li>
                    <li><a href="#contact">Contact</a></li>
                   </ul>
                </div>

             
                  {this.state.people.map(person => (              
                  <div class="card-container">
                  <div className="upper-container"> 
                  <div className="image-container">
                  <img src={person.professional.profile_pic} alt="images"/>
                  </div>
                  </div>
                              
                 <div className="lower-container">
                 <div>
                 <h3>  {person.professional.first_name}  {person.professional.last_name}</h3>
                 <h4>{person.professional.user_type}</h4>
                 </div>
                 <div>
                 <p><CallIcon id="ico"/>{person.professional.phone}</p>

                 <p>{person.professional.email}</p>
                 </div>
                 <div>
              
                {/* 
                <Link data={{unit:this.state.unit,
                changeUnit:this.changeUnit.bind(this)}} to = "/details" className="btn"  >View Profile </Link> 
                 */}

                <Link  to = "/details" className="btn"  >View Profile </Link> 
                
                {/* <Details   */}

               
                 </div>
                 </div>

                 
                 </div>
                 

                ))}


          </div>

        );
    }
}











