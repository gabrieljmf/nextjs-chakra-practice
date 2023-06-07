import { scaleFadeConfig } from "@chakra-ui/react/dist";
import { useState, useEffect } from "react";
// import { getServerSideProps } from "next";

const OldGetWork = () => {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/work_experience")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWorkExperience(data);
      });
  }, []);

  return (
    <div className="workExperience">
      {workExperience.map((job) => (
        <div key={job.company}>{job.company}</div>
      ))}
    </div>
  );
};

export default OldGetWork;
