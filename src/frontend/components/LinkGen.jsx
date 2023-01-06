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
          <a style={styles.info} target="_blank" href={`${window.location.href}${data}`}>{window.location.href}{data}</a>
          <button style={styles.copyButton} onClick={()=>{navigator.clipboard.writeText(`${window.location.href}${data}`)}}>Хуулж авах</button>
        </div>
      </div>
    </div>
  );
};