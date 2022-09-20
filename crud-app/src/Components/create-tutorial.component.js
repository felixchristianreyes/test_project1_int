// CreateTutorial Component for adding new tutorial

// Import Modules
import React, { useState } from "react";
import axios from "axios";
import TutorialForm from "./TutorialForm";

const CreateTutorial = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });
  //onSubmit handler
  const onSubmit = (tutorialObject) => {
    axios
      .post("http://localhost:8080/api/tutorials", tutorialObject)
      .then((res) => {
        if (res.status === 200) alert("Tutorial successfully create");
        else Promise.reject();
      })
      .catch((e) => alert("Something went wrong"));
  };
  return (
    <TutorialForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Tutorial
    </TutorialForm>
  );
};

export default CreateTutorial;
