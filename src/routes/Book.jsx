import { useParams } from "react-router-dom";
import useAxios from "../services/useAxios";
import { useEffect } from "react";
import { Stack, Box, Typography, Grid2, CircularProgress, Rating} from "@mui/material";

function Book() {
    const { id } = useParams();
    const { data: book, loading, get} = useAxios('http://localhost:3000');

    useEffect(() => {   
        get(`books/${id}`);
    }, [id]);

    return (
        <Box sx={{ 
            mx: 'auto', 
            p: 2,
            border: '2px solid rgb(159, 75, 6)',
            padding: '16px',
            margin: '1rem', 
            backgroundColor: 'rgb(240, 231, 216)',
            }}>
            {(!book || loading) ? <CircularProgress />
            : (<Stack sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                <Grid2 container rowSpacing={4} columnSpacing={16}>
                    <Grid2 size={{ xs: 12 }} alignContent={"center"}>
                        <Typography variant="h4">{book.name}</Typography>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 5 }} alignContent={"center"}>
                        <Stack direction={"column"} spacing={2}>  
                            <div><img src={book.img} alt={book.name}></img></div>
                             <Rating
                                name="read-only"
                                value={+book.stars}
                                readOnly
                                size="small"
                                />
                        </Stack>
                    </Grid2>
                    <Grid2 size={{ xs:12, sm: 7 }}  paddingLeft={'3rem'} paddingTop={'6rem'}>
                        <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Typography variant="h6">Author:</Typography>
                            <Typography variant={"body1"}>{book.author}</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Typography variant="h6">Genres:</Typography>
                            <Typography variant={"body1"}>{book.genres.join(", ")}</Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Typography variant="h6">Completed:</Typography>
                            <Typography variant={"body1"}>
                                {book.completed ? "✔️" : "❌"}
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Typography variant="h6">Started:</Typography>
                            <Typography variant={"body1"}>{new Date(book.start).toDateString()}</Typography>
                        </Stack>
                        {book.completed && <Stack direction={"row"} spacing={2} alignItems={"center"}>
                            <Typography variant="h6">Ended:</Typography>
                            <Typography variant={"body1"}>{new Date(book.end).toDateString()}</Typography>
                        </Stack>}
                    </Grid2>
                </Grid2>
            </Stack>
            )}
        </Box>
    );
}

export default Book;