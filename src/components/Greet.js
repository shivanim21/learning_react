import React from 'react'

// function Greet() {
//   return (
//     <div>
//       Hello Shivani!
//     </div>
//   )

// }
// ES6 Arrow function
const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
   
}

export default Greet
