import React from 'react'

function Person({persons}) {
  return (
    <div>
        <h2>
                I am {persons.name}. I am {persons.age} years old. I know {persons.skill}
        </h2>
    </div>
  )
}

export default Person