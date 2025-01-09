import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import { DateField } from '@mui/x-date-pickers/DateField';
import useAxios from '../services/useAxios';
import { bookGenres } from '../genres';
import { Stack, Typography } from '@mui/material';

function AddBook() {  //define a function for adding a book

  const [rateValue, setRateValue] = useState(3); //used useState to set the rate value
  const [book, setBook] = useState({  //used useState to set the details of the book
    author: '',
    name: '',
    genres: [],
    completed: false,
    start: null,
    end: null,
    stars: null,
  });

  const { alert, post} = useAxios('http://localhost:3000');  //use the useAxios hook to get the alert and post

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBook((prevState) => ({...prevState, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    post('books', book);
  }

  const genreChangeHandler = (event) => {  // define a function for splitting the genres
    const { value } = event.target;
    setBook({
      ...book,
      genres: typeof value === 'string' ? value.split(',') : value,
    });
    handleChange(event);
  };

  const rateChangeHandler = (event) => {  //define a function for rating the book
    const { value } = event.target;
    setBook({
      ...book,
      stars: value,
    });
  };

  const addBookHandler = (e) => {  // define a function for checking if the name is completed then chekbox sholud be clicked
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox' && name === 'completed') {
      setBook({ ...book, [name]: checked });
    } else {
      setBook({ ...book, [name]: value });
    }
  };




  return (
    <form onChange={addBookHandler} onSubmit={handleSubmit}>
      <Stack //used stack to set the spacing and alignment of the form
        spacing={1}
        alignItems="stretch"
        sx={{ my: 2, mx: 'auto', width: '25%' }}
            >
        {alert.show && 
        <Alert severity={alert.type}>
        {alert.message} {setTimeout(() => {}, 5000)}</Alert> }   {/* used alert to show the message */}

        <Typography variant="h4" component="h2" sx={{ my: 10 }}>  {/*  header of the form */}
          Add a book
        </Typography>
        <TextField  //textfield for the title of the book
          name="name"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField  //textfield for the author of the book
          name="author"
          id="outlined-basic"
          label="Author"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField  //textfield for the image of the book
          name="img"
          id="outlined-basic"
          label="Image (url)"
          variant="outlined"
          onChange={handleChange}
        />
        <Select //select for the genres of the book
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={book.genres}
          name="genres"
          onChange={genreChangeHandler}
          input={<OutlinedInput label="Genre" />}
        >
          {bookGenres.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>

        <FormControlLabel  //checkbox for the completion of the book
          name="completed"
          control={<Checkbox checked={book.completed} />}
          label="Completed"
        />

        <DateField name="start" label="Started" />  {/* datefield for the start date of the book */}

        <DateField name="end" label="Finished" disabled={!book.completed} /> {/* datefield for the end date of the book */}

        <Stack spacing={1}>
          <Rating  //rating for the book
            name="stars"
            value={rateValue}
            onClick={rateChangeHandler}
            size="large"
            onChange={(event, newValue) => {
              setRateValue(newValue);
            }}
          />
        </Stack>

        <Button variant="contained" type="submit"> {/* button for adding a new book */}
          Add new
        </Button>
      </Stack>
    </form>
  );
}

export default AddBook;
