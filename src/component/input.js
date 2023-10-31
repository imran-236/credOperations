export default function Input(props) {
  return (
    <section>
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </section>
  );
}
