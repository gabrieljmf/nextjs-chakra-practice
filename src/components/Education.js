const Education = ({ school, program, start_date, end_date }) => {
  return (
    <div>
      <ul>
        <li>{school}</li>
        <li>{program}</li>
        <li>{start_date}</li>
        <li>{end_date}</li>
      </ul>
      <br />
    </div>
  );
};

export default Education;
