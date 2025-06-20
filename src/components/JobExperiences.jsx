const JobExperience = ({ job }) => {
  return (
    <div className="job no-break">
      <div className="job-header">
        <div>
          <div className="job-title">{job.title}</div>
          <div className="company">{job.company}</div>
          <div className="location">{job.location}</div>
        </div>
        <div className="duration">{job.duration}</div>
      </div>
      <div className="job-description">
        {job.description}
        <ul className="achievements">
          {job.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobExperience;
