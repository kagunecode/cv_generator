import { useData } from '../store';

function PreviewCV() {
  const [generalInfo, experience, education, skills] = useData(state => [
    state.generalInfo,
    state.experience,
    state.education,
    state.skills,
  ]);

  return (
    <div className="h-full bg-white p-6">
      <div className="h-30 mb-6 rounded-lg bg-emphasis-500 p-5">
        <div className="mb-4 flex flex-col items-center">
          {generalInfo.photo && (
            <img
              className="mb-2 h-24 w-24 rounded-full object-cover"
              src={generalInfo.photo}
              alt=""
            />
          )}
          <h1 className="text-2xl font-bold">{generalInfo.fullname}</h1>
          <p className="text-sm font-light">{generalInfo.title}</p>
        </div>
        <div className="mb-2">
          <p className="text-sm font-light">
            {generalInfo.age}, {generalInfo.country}, {generalInfo.city}
          </p>
          <p className="text-sm font-light">{generalInfo.email}</p>
          <p className="text-sm font-light">{generalInfo.phone}</p>
        </div>
        <p className="text-sm font-light">{generalInfo.about}</p>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h1 className="mb-2 text-lg font-bold">Experience</h1>
            {experience.map(job => (
              <div key={job.id} className="mb-4">
                <p className="text-sm font-bold">{job.company}</p>
                <p className="text-sm font-light">{job.position}</p>
                <div className="flex gap-2 text-xs">
                  <p>{`${job.startDate} ${job.startYear}`}</p>
                  {job.startDate && <p className="font-bold">-</p>}
                  <p>{`${job.endDate} ${job.endYear}`}</p>
                </div>
                <p className="text-sm font-light">{job.description}</p>
              </div>
            ))}
          </div>

          <div>
            <h1 className="mb-2 text-lg font-bold">Education</h1>
            {education.map(ed => (
              <div key={ed.id} className="mb-4">
                <p className="text-sm font-bold">{ed.institution}</p>
                <p className="text-sm font-light">{ed.title}</p>
                <div className="flex gap-2 text-xs">
                  <p>{`${ed.start}`}</p>
                  {ed.start && <p className="font-bold">-</p>}
                  <p>{`${ed.end}`}</p>
                </div>
                <p className="text-sm font-light">{ed.degree}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="mb-2 text-lg font-bold">Skills</h1>
        {skills.map(skill => (
          <div key={skill.id} className="mb-3">
            <p className="text-sm font-bold">{skill.name}</p>
            <p className="text-xs font-light">{skill.expertise}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviewCV;
