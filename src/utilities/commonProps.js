const commonProps = (
  section,
  item,
  className = 'h-8 w-full border border-zinc-300 px-1',
) => {
  return {
    section,
    index: item.id,
    className,
  };
};

export default commonProps;
