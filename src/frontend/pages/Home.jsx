import React, {useState, useEffect} from 'react'
import {LogoSide} from '../assets/Logo.jsx'
import {LinkGen} from '../components/LinkGen'
import {Header, Footer} from '../components/Headers'
import axios from 'axios'
import { useParams } from "react-router-dom"
import '../assets/Logo.css'
import '../assets/Fonts.css'

const styles = {
  body:{
      display:'grid',
      gridTemplateRows:'20% 25% 5% 6.5% 5% 30%',
      gridTemplateColumns:'100%',
      justifyContent:'center',
      alignItems:'center',
      height:'78vh',
      width:'100vw',
      background:'#E5E5E5'
  },
  logo:{
    display:'grid',
    gridTemplateRows:'50%, 50%',
    justifyContent:'center',
    alignSelf:'start',
    justifySelf:'center',
    flexFlow:'wrap',
    width:'25%',
    height:'85.5%',
    fontFamily:'Lobster',
    fontWeight:400,
    fontSize:'330%',
    color:'#02B589',
    gridRow:2
  },
  main:{
    display:'grid',
    justifySelf:'center',
    alignSelf:'start',
    gridTemplateColumns:'69% 2% 29%',
    width:'70%',
    height:'100%',
    gridRow:4
  },
  input:{
    fontFamily:'Ubuntu',
    fontWeight:400,
    fontSize:'80%',
    color:'#272727',
    boxSizing:'border-box',
    padding:'0 4.5%',
    border:'none',
    borderRadius:'50px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.16)',
    gridColumn:1,
  },
  inputBtn:{
    width:'70%',
    height:'100%',
    border:'none',
    gridColumn:3,
    borderRadius:50,
    fontFamily:'Ubuntu',
    fontWeight:700,
    fontSize:'1.25vw',
    background:'#02B589',
    color:'#FFFFFF',
  },
  logoName:{
    justifySelf:'center',
    gridRow:2
  }
}


export const Home = () => {
  const {id} = useParams()
  const [inputURL, setInputURL] = useState('')
  const [output, setOutput] = useState()
  if(id){
    axios.get(`http://localhost:8080/${id}`)
    .then((response) => {
      window.location.replace(response.data.data.originalURL)
    }).catch((error) => {
      window.location.replace('/')
    })
  }
  return (
    <>
    <Header/>
    <div style={styles.body}>
        <div style={styles.logo}>
          <div id='logoContainer'>
            <LogoSide id='logoLeft'/>
            <div id='centerLeft'></div>
            <div id='center'></div>
            <div id='centerRight'></div>
            <LogoSide id='logoRight'/>
          </div>
          <div style={styles.logoName}>Boginoo</div>
        </div>
        <form style={styles.main} onSubmit={(event)=>{
          event.preventDefault() 
          inputURL !== '' ? setOutput(<LinkGen link={inputURL}/>) : setOutput()
          }}>
          <input style={styles.input} onChange={(event)=>setInputURL(event.target.value)} placeholder='https://www.web-huudas.mn'></input>
          <button type='submit' style={styles.inputBtn}>БОГИНОСГОХ</button>
        </form>
        {output}
    </div>
    <Footer/>
    </>
  )
}
