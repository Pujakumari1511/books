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
import { Stack, Typography, Box } from '@mui/material';

function AddBook() {  //define a function for adding a book
  const newBook = {  //used useState to set the details of the book
    author: '',
    name: '',
    genres: [],
    img: '',
    completed: false,
    start: null,
    end: null,
    stars: 0,
  }

  const [rateHover, setRateHover] = useState(); //used useState to set the rate value
  const [book, setBook] = useState(newBook);  //used useState to set the book details

  const { alert, post} = useAxios('http://localhost:3000');  //use the useAxios hook to get the alert and post

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBook((prevState) => ({ ...prevState, [name]: value }));
   
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      ...book,
      img: book.img || "https://upload.wikimedia.org/wikipedia/en/e/e4/Steve_Jobs_by_Walter_Isaacson.jpg",
    };
    post('books', updatedBook);
    setBook(newBook);
  }

  const genreChangeHandler = (event) => {  // define a function for splitting the genres
    const { value } = event.target;
    setBook({
      ...book,
      genres: typeof value === 'string' ? value.split(',') : value,
    });
    handleChange(event);
  };

  const rateChangeHandler = (event, newValue) => {  //define a function for rating the book
    setBook((prevState) => ({
       ...prevState,
        stars: +newValue, 
      }));
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
    <form onSubmit={handleSubmit}>
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
          value={book.name}
          onChange={handleChange}
        />
        <TextField  //textfield for the author of the book
          name="author"
          id="outlined-basic"
          label="Author"
          variant="outlined"
          value={book.author}
          onChange={handleChange}
        />
        <TextField  //textfield for the image of the book
          name="img"
          id="outlined-basic"
          label="Image (url)"
          variant="outlined"
          value={book.img}
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
          onChange={addBookHandler}
        />

        <DateField  //datefield for the start date of the book
        name="start"
        label="Started"
        value={book.start}
        format='YYYY-MM-DD'
        onChange={(newValue) => {
          setBook((prevState) => ({...prevState, start: newValue}));
          }}
        />  

        <DateField
         name="end"
        label="Finished" 
        value={book.end}
        format='YYYY-MM-DD'
        onChange={(newValue) => {
          setBook((prevState) => ({...prevState, end: newValue}));
          }}
        disabled={!book.completed}
       /> 

        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
          <Rating  //rating for the book
            name="stars"
            value={book.stars || 0}
            size="large"
            onChange={rateChangeHandler}
            onChangeActive={(event, newHover) => 
              setRateHover(newHover)
            }
          />
          {(rateHover !== null) && (<Box sx={{fontSize: 20}}>{rateHover !== -1 ? rateHover : book.stars}</Box>)}
        </Box>


        <Button variant="contained" type="submit"> {/* button for adding a new book */}
          Add new
        </Button>
      </Stack>
    </form>
  );
}

export default AddBook;
