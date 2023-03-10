import React from "react";

function FirstStep({ handleNextStep }) {
  return (
    <div className="container">
      <div className="row">
        <div className="row circle-content">
          <div className="circle">1</div>
          <span className="circle-text">Indiquez le contexte de votre DMP</span>
        </div>
      </div>
      <div className="column">
        <div className="form-check">
          <input className="form-check-input check" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked={true} />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Projet de recherche
          </label>
          <div className="list-context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat tellus, pharetra sed ipsum ac, ornare lacinia leo. Curabitur rutrum
            commodo nibh eget ultricies. Aliquam viverra consequat nulla ac vehicula.
          </div>
        </div>
        <div className="form-check">
          <input className="form-check-input check" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Structure de recherche
          </label>
          <div className="list-context">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat tellus, pharetra sed ipsum ac, ornare lacinia leo. Curabitur rutrum
            commodo nibh eget ultricies. Aliquam viverra consequat nulla ac vehicula.
          </div>
        </div>
      </div>
      <div className="row">
        <button type="button" className="btn btn-primary validate" onClick={handleNextStep}>
          Valider mon choix
        </button>
      </div>
    </div>
  );
}

export default FirstStep;
