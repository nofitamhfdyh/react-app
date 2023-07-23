import React from "react";

function NameList(){
        const names = ['Nofita', 'Mahfudiyah','Farhan','Rizky','Alkarim']

        return (
                <div>
                        {
                                names.map(names => <h2>{names}</h2>)
                        }

                        {/* <h2>{names[0]}</h2>
                        <h2>{names[1]}</h2>
                        <h2>{names[2]}</h2>
                        <h2>{names[3]}</h2>
                        <h2>{names[4]}</h2> */}
                </div>
        )
}

export default NameList