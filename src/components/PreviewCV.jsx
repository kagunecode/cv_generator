import { useDataContext } from '../contexts/DataContext';

function PreviewCV() {
  const { data } = useDataContext();
  return (
    <div className="h-full bg-white">
      <div className="h-30 bg-emphasis-500 p-5">
        <img
          className="h-[150px] w-[150px] object-cover"
          src={data.generalInfo[0].photo}
          alt=""
        />
        <h1 className="text-2xl font-bold">{data.generalInfo[0].fullname}</h1>
        <p className="font-light">{data.generalInfo[0].title}</p>
      </div>
      <p className="font-light">{data.generalInfo[0].age}</p>
      <p className="font-light">{data.generalInfo[0].email}</p>
      <p className="font-light">{data.generalInfo[0].phone}</p>
      <p className="font-light">{data.generalInfo[0].country}</p>
      <p className="font-light">{data.generalInfo[0].city}</p>
      <p className="font-light">{data.generalInfo[0].about}</p>
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
