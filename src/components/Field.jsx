export default function Field({ name, field, set, index, ...props }) {
  return (
    <>
      <label htmlFor={field}>{name}</label>
      <input
        id={field}
        onChange={e => set(field, e.target.value, index)}
        {...props}
      />
    </>
  );
}
