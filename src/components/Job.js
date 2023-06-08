const Job = ({ company, role, start_date, end_date }) => {
  var start = new Date(start_date);
  var end = new Date(end_date);
  var diff = Math.ceil(Math.abs(end - start) / (1000 * 60 * 60 * 24) / 31);

  diff = diff < 12 ? diff + " months" : Math.ceil(diff / 12) + " years";

  return (
    <div style={{ paddingBottom: "2rem" }}>
      <h2>{company}</h2>
      <p>{role}</p>

      <p>Time in Role: {diff} </p>
      <p>
        From: {start_date} to {end_date}
      </p>
    </div>
  );
};

export default Job;
