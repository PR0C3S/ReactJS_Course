import React, {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getRandomJoke } from '../../../services/axioService';

const ChuckNorrisJokes = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [joke, setJoke] = useState(null);
    const [status, setStatus] = useState('');

    
    useEffect(() => {
        obtainJoke();
    }, []);
    
    function obtainJoke() {
        getRandomJoke()
            .then((response) =>{
                setJoke(response.data);
                setStatus('');
            })
            .catch((error)=>{
                alert(`Something went wrong error: ${error}`);
            })
    }

    function likeJoke(){
        if(status === ''){
            setLikes(likes+1);
            setStatus('like');
        }
        if(status === 'dislike'){
            setDislikes(dislikes-1);
            setLikes(likes+1);
            setStatus('like');
        }
    }

    function dislikeJoke(){
        if(status === ''){
            setDislikes(dislikes+1);
            setStatus('dislike');
        }
        if(status === 'like'){
            setLikes(likes-1);
            setDislikes(dislikes+1);
            setStatus('dislike');
        }
    }

    const cardElement= () => {

        return (
        <Card sx={{ maxWidth: 345 }}>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Chuck Norris Joke
                </Typography>
                    
                <Typography variant="body2" color="text.secondary">
                Likes: {likes} - Dislikes: {dislikes}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                {joke.value}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={likeJoke}>Like</Button>
                <Button size="small" onClick={dislikeJoke}>Dislike</Button>
                <Button size="small" onClick={obtainJoke}>New Joke</Button>
            </CardActions>
        </Card>)
    }


    
    return (
        <div>

        {joke ? cardElement() : (<p>No data</p>)}
        
        </div>
    );
}

export default ChuckNorrisJokes;
