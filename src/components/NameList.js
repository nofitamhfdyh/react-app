import React from "react";

function NameList(){
        const names = ['Nofita', 'Mahfudiyah','Farhan','Rizky','Alkarim']
        const nameList = names.map(names => <h2>{names}</h2>)

        return (
                <div>{nameList}</div>
        )
}

export default NameList