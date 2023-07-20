import React from 'react'

function FunctionClick() {
        function clickHandler(){
                console.log('Button Clicked')
        }
  return (
        <div>
                <button onClick={clickHandler}>Click</button>
        </div>
  )
}

export default FunctionClick

// evenet handling -> pemanggilannya tanpa perlu dikasih (), cukup memanggil nama functionnya saja, tidak perlu memanggil parent