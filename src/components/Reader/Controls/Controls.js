export const Controls = ({ current, total, onChange }) => {
  return (
    <section>
      <button disabled={current === 1} onClick={() => onChange(-1)}>
        Prev
      </button>
      <button disabled={current === total} onClick={() => onChange(1)}>
        Next
      </button>
    </section>
  );
};
