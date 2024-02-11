const commonProps = (job, updateItem) => {
  return {
    section: 'experience',
    index: job.id,
    set: updateItem,
    className: 'h-8 w-full border border-zinc-300 px-1',
  };
};

export default commonProps;
