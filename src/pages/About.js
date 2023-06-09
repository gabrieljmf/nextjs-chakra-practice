import Job from "@/components/Job";
import Education from "@/components/Education";

const About = ({ wexpData, educationData, sportsHobbiesData }) => {
  return (
    <div>
      <pre>
        <h1>Work Experience</h1>
        {wexpData.map(({ id, company, role, start_date, end_date }) => {
          return (
            <Job
              key={id}
              company={company}
              role={role}
              start_date={start_date}
              end_date={end_date}
            />
          );
        })}
      </pre>
      <pre>
        <h1>Education</h1>
        {educationData.map(({ id, school, program, start_date, end_date }) => {
          return (
            <Education
              key={id}
              school={school}
              program={program}
              start_date={start_date}
              end_date={end_date}
            />
          );
        })}
      </pre>
      <pre>
        <h1>Sports and Hobbies</h1>
        {/* {sportsHobbiesData.map((pastTime) => {
          return (
            <SportHobby 
            key={pastTime.id} 
            />
          )
        })} */}
      </pre>
    </div>
  );
};

export const getServerSideProps = async () => {
  const {
    work_experience: wexpData,
    education: educationData,
    sportshobbies: sportsHobbiesData,
  } = await fetch("/api/data").then((res) => {
    return res.json();
  });

  return { props: { wexpData, educationData, sportsHobbiesData } };
};

export default About;
