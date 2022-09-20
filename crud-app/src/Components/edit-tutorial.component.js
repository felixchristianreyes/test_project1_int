/* eslint-disable react-hooks/exhaustive-deps */
// EditTutorial Component for updating Tutorial data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import TutorialForm from "./TutorialForm";

//EditTutorial Component
const EditTutorial = (props) => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  //onSubmit handler
  const onSubmit = (tutorialObject) => {
    axios
      .put(
        "http://localhost:3000/students/update-student/" +
          props.match.params.id,
        tutorialObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Tutorial successfully updated");
          props.history.push("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize tutorial form
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/tutorials/:id" + props.match.params.id
      )
      .then((res) => {
        const { title, description } = res.data;
        setFormValues({ title, description });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <TutorialForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Tutorial
    </TutorialForm>
  );
};

export default EditTutorial;
