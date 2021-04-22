import React from "react";
import "../css/Profil.css";
import image1 from '../image/1.jpg';
import image2 from '../image/2.jpg';
import image3 from '../image/3.jpg';



const Profil = (props) => {
  const h1 = {
    color: "red",
    textAlign: "center",
    fontSize: "bold",
    fontFamily: "sherif sans Ms",
    marginBottom: "30px",
  };

        const img ={
            height:"150px",
            width:"250px",
            margin:"50px 50px",
            borderRadius: "5%"
        }

  
  return (
    <>
        
      <h1 style={h1}> ~ Profil Country ~ </h1>

      <div className="flexy">
             <img onClick={props.affiche}
          style={{
            
            height: "40%",
            width: "25%",
            borderRadius: "10%",
            textAlign: "left",
          }}
          src={props.children}
          alt={props.alt}
        />

        <div className="por col-9" >
          <h2 
          style={{ margin: "10px",
           textAlign: "center",
           fontFamily: "sherif sans Ms",
            position: "top",
            wordSpacing: "7px",
            height:"30%",
           
           }}
           
        >
        I'm : {props.fullName}
        </h2>

          <h2 
          style={{ margin: "10px",
          textAlign: "center",
          fontFamily: "sherif sans Ms",
          position: "top",
          height:"10%",
          wordSpacing: "5px",
          }} >
           I'm : {`${props.age}  Years old`}
          </h2>
          
         <h3
          style={{
            marginTop: "60px",
            marginLeft:"100px",
            color: "yellow",
            fontFamily: "sherif sans Ms",
            wordSpacing: "7px",
            textAlign: "center",
          }}
        >
        My State : {props.Bio}
        </h3>

        </div>

          </div>
          
          <div className="flexy">
          <img style={img} src={image1} alt="home1"/>
          <img style={img} src={image2} alt="home2"/>
          <img style={img} src={image3} alt="home3"/>
          </div>
         
    </>
  );
};

export default Profil;
