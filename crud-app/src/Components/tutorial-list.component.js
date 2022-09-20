import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TutorialTableRow from "./TutorialTableRow";

const TutorialList = () => {
  const [tutorial, setTutorial] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/tutorials")
      .then(({ data }) => {
        setTutorial(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return tutorial.map((res, i) => {
      return <TutorialTableRow obj={res} key={i} />;
    });
  };

  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

export default TutorialList;
