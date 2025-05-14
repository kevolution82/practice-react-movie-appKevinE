import React from "react";
import MovieSelector from "./components/MovieSelector";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src="/reactmovieapp.png"
        alt="React Movie App Logo"
        style={{ maxWidth: "300px", marginBottom: "1rem" }}
      />
      <MovieSelector />
    </div>
  );
}

export default App;
