//import React, { useState } from "react";

export default function About(props) {
  /*   const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  }); */

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "black" : "white",
  };

  /*  const [btntext, setBtnText] = useState("Enable Dark Mode"); */

  /*   const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  }; */

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Introduction to Online Text Editor
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Online text editors</strong> have become integral tools in
              the digital age, providing users with the flexibility to create,
              edit, and collaborate on documents seamlessly. Unlike traditional
              desktop applications, online text editors operate through web
              browsers, allowing users to access their work from any device with
              internet connectivity. These platforms often boast a range of
              features, from real-time collaboration and version history to
              cloud storage, making them ideal for individuals, students, and
              professionals alike.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Key Features of Online Text Editors
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Online text editors</strong> offer a myriad of features
              that enhance productivity and streamline the writing process.
              Real-time collaboration is a standout feature, enabling multiple
              users to work on a document simultaneously, fostering teamwork and
              eliminating the need for constant file sharing. Another
              significant advantage is the automatic cloud saving, which ensures
              that work is securely stored and easily accessible from any
              location. Additionally, many online text editors incorporate
              advanced formatting options, spell-check, and the ability to
              export documents in various file formats, catering to diverse user
              needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Popular Online Text Editors
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>Several online text editors</strong> have gained
              popularity for their user-friendly interfaces and robust
              functionality. Google Docs, a part of the Google Workspace suite,
              is renowned for its collaborative features, seamless integration
              with other Google services, and accessibility across different
              platforms. Microsoft Word Online, an extension of the familiar
              desktop application, offers a comprehensive set of tools and is
              linked to OneDrive for efficient cloud storage. Other notable
              mentions include Zoho Writer, which combines sophisticated
              features with a clean interface, and Dropbox Paper, focusing on
              simplicity and effective collaboration. As technology continues to
              evolve, online text editors are likely to remain pivotal tools in
              the realm of digital communication and document creation.
            </div>
          </div>
        </div>
      </div>
      {/*   <div className="conatiner">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary my-3"
        >
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
