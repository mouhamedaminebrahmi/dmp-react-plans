import React, { useEffect, useState } from "react";
import { getDefaultModel, getFunder, getOrganisme } from "../../services/DmpApi";
import Select from "react-select";

function SecondStep({ handleNextStep }) {
  const [defaultModel, setdefaultModel] = useState(null);
  const [listOrganisme, setlistOrganisme] = useState(null);
  const [listFunder, setlistFunder] = useState(null);

  useEffect(() => {
    getDefaultModel().then((res) => {
      setdefaultModel(res.data);
    });
  }, []);

  useEffect(() => {
    getOrganisme().then((res) => {
      const options = res.data.map((option) => ({
        value: option.id,
        label: option.sort_name,
        object: option,
      }));
      setlistOrganisme(options);
      //setdefaultModel(res.data);
    });
  }, []);

  useEffect(() => {
    getFunder().then((res) => {
      console.log(res);
      const options = res.data.map((option) => ({
        value: option.id,
        label: option.sort_name,
        object: option,
      }));
      setlistFunder(options);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="row circle-content">
          <div className="circle">2</div>
          <span className="circle-text">Choisissez votre modèle</span>
        </div>
      </div>
      <div className="column">
        <div className="form-check">
          <input className="form-check-input check" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Modèle par défaut
          </label>
          <div className="list-context">{defaultModel && defaultModel?.title}</div>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            INRAE (votre organisme)
          </label>
          <div className="list-context">INRAE - Modèle Projet</div>
          <div className="list-context">INRAE - Modèle Structure</div>
          <div className="list-context">INRAE - Project template</div>
          <div className="list-context">IRSTEA Modèle</div>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Autre organisme
          </label>
          <div className="list-context">{listOrganisme && <Select options={listOrganisme} />}</div>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Financeur
          </label>
          <div className="list-context">{listFunder && <Select options={listFunder} />}</div>
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

export default SecondStep;
