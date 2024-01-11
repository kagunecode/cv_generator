import { useDataContext } from '../contexts/DataContext';
import { useData } from '../store';

function PreviewCV() {
  const { data } = useDataContext();
  const [generalInfo] = useData(state => [state.generalInfo]);
  return (
    <div className="h-full bg-white">
      <div className="h-30 bg-emphasis-500 p-5">
        <img
          className="h-[150px] w-[150px] object-cover"
          src={generalInfo.photo}
          alt=""
        />
        <h1 className="text-2xl font-bold">{generalInfo.fullname}</h1>
        <p className="font-light">{generalInfo.title}</p>
      </div>
      <p className="font-light">{generalInfo.age}</p>
      <p className="font-light">{generalInfo.email}</p>
      <p className="font-light">{generalInfo.phone}</p>
      <p className="font-light">{generalInfo.country}</p>
      <p className="font-light">{generalInfo.city}</p>
      <p className="font-light">{generalInfo.about}</p>
      {data.experience.map(job => {
        return (
          <div key={job.id}>
            <h1 className="font-bold">{job.company}</h1>
            <p className="font-light">{job.position}</p>
            <div className="flex gap-2">
              <p className="font-light">{`${job.startDate} ${job.startYear}`}</p>
              {job.startDate != '' ? <p className="font-bold">-</p> : null}
              <p className="font-light">{`${job.endDate} ${job.endYear}`}</p>
            </div>
            <p className="font-light">{job.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PreviewCV;
