import React from "react";

const Title = () => {
  const containerStyle = {
    padding: "2px",
    marginTop: "2px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  const headingStyle = {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "48px",
    letterSpacing: "-0.2px",
    margin: "2px",
    /* fontFamily: "Merriweather", serif; */
  };

  const textStyle = {
    maxWidth: "50rem",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#ffffff",
    fontSize: "18px",
    letterSpacing: "1px",
    wordSpacing: "2px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>FORMULA-INATOR</h2>
      <p style={textStyle}>
        Ah, Formula-inator, my latest and greatest creation! This web-based
        calculator application is built with React.
      </p>
    </div>
  );
};

export default Title;
