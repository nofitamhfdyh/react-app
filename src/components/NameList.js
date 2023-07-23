import React from "react";
import Person from "./Person";

function NameList(){
        // const names = ['Nofita', 'Mahfudiyah','Farhan','Rizky','Alkarim']
        // const nameList = names.map(names => <h2>{names}</h2>)

        // return (
        //         <div>{nameList}</div>
        // )

        const persons = [
                {
                        id: 1,
                        name: 'Nofita',
                        age: 23,
                        skill: 'Golang'
                },{
                        id:2,
                        name: 'Mahfudiyah',
                        age:30,
                        skill: 'Laravel'
                },{
                        id:3,
                        name: 'Farhan',
                        age:24,
                        skill: 'Code Igniter'
                },{
                        id:4,
                        name: 'Rizky',
                        age:60,
                        skill:'React'
                }
        ]

        const personList = persons.map(persons => <Person persons={persons}> </Person>)
        return <div>{personList}</div>
}

export default NameList