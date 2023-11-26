
import React, { useState, useEffect } from 'react'
import "./App.css"

function App() {
  const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";
  const [persondata, setpersondata] = useState([{}]);
  useEffect(
    () => {
      fetch(`${url}`).then(
        res => res.json()
      ).then(
        data => {
          setpersondata(data)
          console.log(data)
        }
      )
    }, []
  )
  return (
    <div >
      {(typeof persondata.results === 'undefined') ? (
        <div>
          <p>Data is loading...</p>
        </div>) : (
        <>

          <div className="wrapper">
            <div className="left">
              <img src={persondata.results[0].picture.large} alt="user" width={100} />
            </div>
            <div className="right">
              <div className="info">
                <div className="info_data">
                  <div className="data">
                    <h4>first name:</h4>
                    <p>{persondata.results[0].name.first}</p>
                  </div>

                  <div className="data">
                    <h4>last name:</h4>
                    <p>{persondata.results[0].name.last}</p>
                  </div>
                </div>
              </div>
              <div className="projects">
                <p>Gender: {persondata.results[0].gender}</p>
                <p>Phone: {persondata.results[0].phone}</p>
              </div>
            </div>
          </div>


        </>
      )

      }
    </div >
  );
}

export default App;
