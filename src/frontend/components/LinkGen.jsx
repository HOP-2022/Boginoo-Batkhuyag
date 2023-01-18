import axios from 'axios'
import {useState, useEffect} from 'react'

const styles = {
  container: {
    width: "65.5%",
    height: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gridRow:6,
    alignSelf:'start',
    justifySelf:'center'
  },
  content: {
    width: "100%",
    height: "100%",
  },
  key: {
    fontFamily: "Ubuntu",
    fontWeight: "400",
    filter: "opacity(30%)",
    fontSize: "70%",
    marginBottom: "1%",
  },
  info: {
    fontFamily: "Ubuntu",
    fontWeight: "400",
    fontSize: "100%",
  },
  copyContainer: {
    width: "100%",
    display: "flex",
  },
  copyButton: {
    border: "none",
    backgroundColor: "transparent",
    fontFamily: "Ubuntu",
    fontWeight: "400",
    fontSize: "100%",
    color: "#02B589",
    textDecoration: "underline",
    marginLeft: "2%",
  },
};

export const LinkGen = ({ link }) => {
  const [data, setData] = useState()
  useEffect(()=>{
    axios.post("http://localhost:8080",{
      originalURL: link
    }).then((response) => {
      setData(response.data.data._id)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.key}>Өгөгдсөн холбоос:</div>
        <div style={styles.info}>{[...link]}</div>
      </div>
      <div style={styles.content}>
        <div style={styles.key}>Богино холбоос:</div>
        <div style={styles.copyContainer}>
          <a style={styles.info} target="_blank" rel="noreferrer" href={`${window.location.href}${data}`}>{window.location.href}{data}</a>
          <button style={styles.copyButton} onClick={()=>{navigator.clipboard.writeText(`${window.location.href}${data}`)}}>Хуулж авах</button>
        </div>
      </div>
    </div>
  );
};

const styles_History = {
  main: {
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    width: "65.5%",
    height: "105%",
    gridRow:6,
    alignSelf:'start',
    justifySelf:'center',
    overflowY:'scroll',
    overflowX:'hidden'
  },
  mainText: {
    fontFamily: 'Ubuntu',
    fontSize:'200%',
    color: '#02B589',
    justifySelf:'center',
    margin: '0 auto 0 2.5%',
    height:'min-content',
  },
  container: {
    display:'flex',
    justifyContent:'center',
    width: "92.5%",
    height: "50%",
    borderBottom: '2px solid #D6D6D6'
  },
  content: {
    width: "48%",
    height: "100%",
    margin: '5% 2%'
  },
  key: {
    fontFamily: "Ubuntu",
    fontWeight: "400",
    filter: "opacity(30%)",
    fontSize: "90%",
    marginBottom: "1%",
  },
  info: {
    fontFamily: "Ubuntu",
    fontWeight: "400",
    fontSize: "90%",
    wordBreak: 'break-all'
  },
  copyButton: {
    border: "none",
    backgroundColor: "transparent",
    fontFamily: "Ubuntu",
    fontWeight: "400",
    fontSize: "100%",
    color: "#02B589",
    textDecoration: "underline",
    marginLeft: "2%",
  },
};

function historyObj(data){
  return <div style={styles_History.container}>
    <div style={styles_History.content}>
      <div style={styles_History.key}>Өгөгдсөн холбоос:</div>
      <a style={styles_History.info} target="_blank" rel="noreferrer"  href={data.originalURL} >{data.originalURL}</a>
    </div>
    <div style={styles_History.content}>
      <div style={styles_History.key}>Богино холбоос:</div>
      <div style={styles_History.copyContainer}>
        <a style={styles_History.info} target="_blank" rel="noreferrer" href={`${window.location.href}${data._id}`}>{window.location.href}{data._id}</a>
        <button style={styles_History.copyButton} onClick={()=>{navigator.clipboard.writeText(`${window.location.href}${data._id}`)}}>Хуулж авах</button>
      </div>
    </div>
  </div>
}

export const LinkHistory = () => {
  const [data, setData] = useState()
  useEffect(()=>{
    axios.get("http://localhost:8080").then((response) => {
      setData(response.data.urls)
    }).catch((error) => {
      console.log(error)
    })
  }, [])
  return (
    <div style={styles_History.main}>
      <h1 style={styles_History.mainText}>Түүх</h1>
      {data !== undefined && data.map((el) => {return historyObj(el)})}
    </div>
  );
};