import movieArray from '../data/movies.json';
const genres = [];

movieArray.forEach(movie => {
  movie.genres.forEach(genre => {
    if (genres.indexOf(genre.name) === -1) {
      genres.push(genre.name);
    }
  });
});

export default function Genre(props) {
  let customBackgroundColor;
  switch (props.name) {
    case genres[0]:
      customBackgroundColor = '#ccd5ae';
      break;
    case genres[1]:
      customBackgroundColor = '#e9edc9';
      break;
    case genres[2]:
      customBackgroundColor = '#fefae0';
      break;
    case genres[3]:
      customBackgroundColor = '#faedcd';
      break;
    case genres[4]:
      customBackgroundColor = '#d4a373';
      break;
    case genres[5]:
      customBackgroundColor = '#606c38';
      break;
    case genres[6]:
      customBackgroundColor = '#283618';
      break;
    case genres[7]:
      customBackgroundColor = '#dda15e';
      break;
    case genres[8]:
      customBackgroundColor = '#bc6c25';
      break;
    case genres[9]:
      customBackgroundColor = '#264653';
      break;
    case genres[10]:
      customBackgroundColor = '#2a9d8f';
      break;
    case genres[11]:
      customBackgroundColor = '#e9c46a';
      break;
    case genres[12]:
      customBackgroundColor = '#f4a261';
      break;
    case genres[13]:
      customBackgroundColor = '#e76f51';
      break;
    case genres[14]:
      customBackgroundColor = '#8ecae6';
      break;
    case genres[15]:
      customBackgroundColor = '#219ebc';
      break;
    case genres[16]:
      customBackgroundColor = '#023047';
      break;
    case genres[17]:
      customBackgroundColor = '#ffb703';
      break;
    case genres[18]:
      customBackgroundColor = '#fb8500';
      break;
    case genres[19]:
      customBackgroundColor = '#ffcdb2';
      break;
    default:
      customBackgroundColor = '#ffb4a2';
  }
  return (
    <div>
      <h3
        style={{ backgroundColor: customBackgroundColor, color: '#242423' }}
        className="movieGenreLabels"
      >
        {props.name}
      </h3>
    </div>
  );
}