import { useState, useEffect } from "react";
// import { getServerSideProps } from "next";

export const getServerSideProps = async () => {
  const jsondata = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => {
    // const jsondata = await fetch("http://localhost:3000/api/data").then((res) => {

    return res.json();
  });
  return { props: { jsondata } };
};

const GetWork = () => {
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

const GetEducation = ({ jsondata }) => {
  console.log(jsondata);
  return (
    <div className="education">
      {/* <ul>
        {educations.map((education) => {
          return <li key={education.school}>{education.school}</li>;
        })}
      </ul> */}

      <ul>
        {jsondata.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

const GetSH = () => {};

export default GetEducation;

export { GetWork };
