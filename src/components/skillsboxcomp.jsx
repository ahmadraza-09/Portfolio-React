import React from 'react'

const Skillsboxcomp = (props) => {
  return (
    <>
      <div className="skills-box">
            <div className="image-box">
              <img src={props.imageSrc} alt="" />
            </div>
            <h1>{props.skillBoxHead}</h1>
            <p>{props.skillBoxText}</p>
            <div className="language-used">
              <h4>{props.languageUsedHead}</h4>
              <ul>
                <li>{props.languageUsed1}</li>
                <li>{props.languageUsed2}</li>
                <li>{props.languageUsed3}</li>
                <li>{props.languageUsed4}</li>
                <li>{props.languageUsed5}</li>
                <li>{props.languageUsed6}</li>
                {props.showElement && <li>{props.languageUsed7}</li>}
                {props.showElement && <li>{props.languageUsed8}</li>}
                {props.showElement && <li>{props.languageUsed9}</li>}
                {props.showElement && <li>{props.languageUsed10}</li>}
              </ul>
            </div>
            <div className="language-used">
              <h4>{props.devToolsHead}</h4>
              <ul>
                <li>{props.devToolsUsed1}</li>
                <li>{props.devToolsUsed2}</li>
                <li>{props.devToolsUsed3}</li>
                <li>{props.devToolsUsed4}</li>
              </ul>
            </div>
          </div>
    </>
  )
}

export default Skillsboxcomp;
