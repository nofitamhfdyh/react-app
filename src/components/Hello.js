import React from "react";


const Hello = () => {
        // return(
        //         <div>
        //                 <h1>
        //                         Hello Nopnopsss!!!
        //                 </h1>
        //         </div>
        // )

        return React.createElement('div',
                {id : 'Hello', className : 'dummyClass'}, // biasanya digunakan untuk menempatkan id dan class . jadi, jika tidak diperlukan sebuah id, maka bisa diisi null
                React.createElement('h1', null, 'Holla! Nofita Mahfudiyah')) //(1)
        /**
         * dalam 1 function reacr.createElement(), hanya ada 3 parameter saja.
         * jadi jika dalam 1 parameter memiliki anak, maka diparameter ke3, bisa dipanggil react.createElement()   
         */

}

export default Hello