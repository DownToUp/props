import "./App.css";
import Profil from "./Profile/Profil";
import Tunisie from "./image/Tunisie.jpg";
import PropTypes from "prop-types";

function App() {

  // object country

  const country = {
    alt: "Im Tunisia",
    name: "TUNISIA",
    Bio: "So-Sad-Country-But-Never-Back-Down",
    age:3000,
    beauty:true
  }

//fonction handleName 

  const handleName = _ => {
    return alert(`Welcom to ${country.name} `);
    
  };

  return (
    <div className="App">
      <Profil
        fullName={country.name}
        affiche={handleName}
        Bio={country.Bio}
        alt={country.alt}
        age={country.age}
        beauty={country.beauty}
      >
        {Tunisie}
      </Profil>
    </div>
  );
}

export default App;

// Set default props
Profil.defaultProps = {
  fullName: "country Name",
  Bio :"Bio of country",
  age : "0000"
 };
 
 // validation de types
 Profil.propTypes = {
  beauty: PropTypes.oneOf([true, false]),
  alt: PropTypes.any,
  age: PropTypes.number,
  fullName: PropTypes.string,
  Bio: PropTypes.string,
  affiche: PropTypes.func
 };