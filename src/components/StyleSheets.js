import React from 'react'
import './myStyle.css'

function StyleSheets(props) {
        let namaKelas = props.primary ? 'primary' : '' //membaca value dari primary props. jika value nya true, maka memanggil primary. settingan true / false di app.js (13)
  return (
    <div>
        <h1 className={`${namaKelas} font-xl`}> Hello Nupnup</h1> {/** value dari variable namaKelas di assign ke className, sehingga isinya primary, lalu memanggil css .primary */}
    </div>
  )
}

export default StyleSheets