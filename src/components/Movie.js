export default function Movie(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.release}</h2>
      <h2>{props.overview}</h2>
      <img src={props.photo} />
    </div>
  );
}
