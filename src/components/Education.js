const Education = ({ school, program, start_date, end_date }) => {
  var start = new Date(start_date);
  var end = new Date(end_date);
  var diff = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24) / 31);

  diff = diff < 12 ? diff + " months" : Math.ceil(diff / 12) + " years";

  return (
    <div>
      <ul>
        <li>{school}</li>
        <li>{program}</li>
        <li>{diff}</li>
        <li>From: {start_date} to {end_date}</li>
      </ul>
      <br />
    </div>
  );
};

export default Education;
