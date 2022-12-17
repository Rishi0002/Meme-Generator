import React from "react";
import './meme.css';
import image from './Troll Face.svg'

export default function Button({image}){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(Data => setAllMemes(Data.data.memes));
    }, []);
    
    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return(
        <div className="button">
            <div className="inputs-all-wrap">
                <input
                    type="text" 
                    id="input-1"  
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    id="input-2" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button id="get-meme" onClick={getMemeImage} type="submit">
                Get a new meme image
            </button>
            <h2 className="meme--text-top">{meme.topText}</h2>
            <h2 className="meme--text-bottom">{meme.bottomText}</h2>
            <img 
                src={meme.randomImage} 
                alt="meme" 
                className="meme--image"
            />
        </div>
    );
}