import Genre from "./Genre"

export default function Movie(props){
  return (
    <div>
            <h1>{props.title}</h1>
            <img src={props.picture} />
            <h3>Release Date: {props.release}</h3>
            <p>{props.overview}</p>
    </div>

  )
}