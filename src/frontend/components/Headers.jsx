import React from 'react'
import '../assets/Fonts.css'

const hStyles = {
    main:{
        display:'flex',
        justifyContent:'end',
        boxSizing: 'border-box',
        padding:'0 2%',
        alignItems:'end',
        height:'11vh',
        width:'100vw',
        background:'#E5E5E5',
    },
    btn1:{
        height:'100%',
        background:'none',
        border:'none',
        fontFamily:'Ubuntu',
        fontWeight:700,
        fontSize: '15px',
        color:'#02B589',
        whiteSpace:'nowrap',
    },
    btnLogin:{
        justifySelf:'center',
        alignSelf:'center',
        padding: '2.5% 4.5%',
        border:'none',
        borderRadius:50,
        fontFamily:'Ubuntu',
        fontWeight:700,
        fontSize: '15px',
        background:'#02B589',
        color:'#FFFFFF'
    },
    container:{
        display:'flex',
        justifyContent:'space-around',
        height:'50%',
        width:'350px',

    }
}

export const Header = () => {
  return (
    <div style={hStyles.main}>
        <div style={hStyles.container}>
            <button style={hStyles.btn1}>ХЭРХЭН АЖИЛЛАДАЖ ВЭ?</button>
            <button style={hStyles.btnLogin}>Нэвтрэх</button>
        </div>
    </div>
  )
}

const fStyles = {
    main:{
        display:'grid',
        gridTemplateRows:'15% 7.5% 35%',
        justifyContent:'center',
        height:'11vh',
        width:'100vw',
        background:'#E5E5E5',
        fontFamily:'Ubuntu',
        fontWeight:400
    },
    copyright:{
        justifySelf:'center',
        color:'rgba(0,0,0,0.2)',
        gridRow:3
    }
}

export const Footer = () => {
    return (
        <div style={fStyles.main}>
            <h5>Made with 💙 by Nest Academy</h5>
            <h5 style={fStyles.copyright}>©boginoo.io 2020</h5>
        </div>
    )
}
  