import React from "react";

// function Greet(){
//         return <h1> Hallo Nupnup </h1>
// }

const Greet = (props) => {
        console.log(props)
        return (
                <div>
                        <h1>Hallo {props.name} a.k.a {props.heroName}</h1> 
                        {props.children}
                </div>
                ) 
}

export default Greet // cara (1) supaya komponennnya bisa diakses dan dipanggil di folder lain