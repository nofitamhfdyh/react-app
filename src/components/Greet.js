import React from "react";

// function Greet(){
//         return <h1> Hallo Nupnup </h1>
// }

const Greet = (props) => {
        console.log(props)
        return <h1>Hallo {props.name}</h1> // understanding the basic arrow functions ; penambahan kurung kurawa di file pemanggilan jika tanpa menggunakan default (1a)
}

export default Greet // cara (1) supaya komponennnya bisa diakses dan dipanggil di folder lain