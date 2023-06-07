import { useState, useEffect } from "react";

const GetData = () => {
  const [workExperience, setWorkExperience] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/work_experience")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWorkExperience(data);
      });
  }, []);
  
  return (
  <div>
    { workExperience.map((job) => (
        <div key={job.company}>{job.company}</div>
    ))
    } </div>
  );
};

const About = () => {
  return <div>TEST</div>;
};

export { GetData, About };
