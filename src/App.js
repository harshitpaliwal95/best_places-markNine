import { useState } from "react";
import "./styles.css";

// main list
const places = {
  Rajasthan: [
    { cityName: "Udaipur", spaciality: "The city of lakes" },
    { cityName: "Jodhpur", spaciality: "A Place To Taste Royalty" },
    { cityName: "Jaipur", spaciality: "The Pink City" },
    { cityName: " Jaisalmer", spaciality: "The Golden City" }
  ],
  Karnataka: [
    { cityName: "Bangalore", spaciality: "The City of Diverse Existence" },
    { cityName: "Hampi", spaciality: "An Architectural Marvel" },
    { cityName: "Mysore", spaciality: "City of Old World Charm" },
    { cityName: "Gokarna", spaciality: "Tranquility at its Best" }
  ],
  Kerela: [
    { cityName: "Munnar", spaciality: "Tea Gardens" },
    { cityName: "Cochin", spaciality: "Queen of the Arabian Sea" },
    { cityName: "Kumarakom", spaciality: "magical charm of the Vembanad Lake" }
  ]
};

export default function App() {
  // function for set state
  const [selectState, setState] = useState("Rajasthan");
  function stateClickHandler(state) {
    setState(state);
  }

  return (
    <div className="App">
      <h1>
        best places to visit in{" "}
        <span
          style={{ background: "#94d6ff", padding: "5px", fontSize: "40px" }}
        >
          <span style={{ color: "orange" }}>In</span>
          <span style={{ color: "white" }}>di</span>
          <span style={{ color: "green" }}>a</span>
        </span>
      </h1>
      <p style={{ margin: "auto", fontSize: "large" }}>
        here is must visit places
      </p>
      <div>
        {/* list of states */}
        {Object.keys(places).map((state) => (
          <button
            onClick={() => stateClickHandler(state)}
            style={{
              cursor: "pointer",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              background: "#e8eaf6"
            }}
          >
            {state}
          </button>
        ))}
      </div>
      <div
        style={{
          textAlign: "left",
          border: ".2px solid black",
          borderRadius: "20px"
        }}
      >
        {/* list of all city/places */}
        <ul style={{ paddingInlineStart: "0" }}>
          {places[selectState].map((state) => (
            <li
              key={state.cityName}
              style={{
                listStyle: "none",
                padding: "1.6rem",
                border: ".5px solid black",
                borderRadius: "10px",
                margin: "1rem .5rem",
                background: "rgb(232 234 246 / 46%",
                color: "white"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{state.cityName}</div>
              <div style={{ fontSize: "smaller" }}>
                Spaciality - {state.spaciality}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* footer */}

      <footer style={{ marginTop: "200px", padding: "12px" }}>
        Made By Harshit Paliwal
      </footer>

      {/* links for stay connected */}

      <div id="links">
        <a href="https://twitter.com/harshit__hp" target="_blank">
          <i class="fab fa-twitter fa-2x"></i>
        </a>

        <a href="https://github.com/harshitpaliwal95" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/harshit-paliwal-8302951b0/"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
