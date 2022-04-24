import React, { Component } from "react";

class DeckBox extends Component {

render(){
    // TODO get data from json and build each card in deck box from data
    return(
        <div className="deck-box content flex-row wrap gap">
            
            <div className="card hero flex-col">
                    <img src="https://raw.githubusercontent.com/fvtt-fria-ligan/vaesen-foundry-vtt/master/asset/screen_shot.png"
                        alt="vaesen screen shot" width='100%' />
                    <div className="card-content">
                        <h2>Vaesen system for Foundry VTT</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores
                            dolorem beatae nisi libero ullam voluptatem, expedita alias, minus cupiditate a amet
                            suscipit
                            perferendis similique? Accusantium dignissimos voluptatem culpa iusto!</p>
                    </div>
                </div>
                <div className="card side-kick flex-col">
                    <img src="https://raw.githubusercontent.com/fvtt-fria-ligan/vaesen-foundry-vtt/master/asset/screen_shot.png"
                        alt="vaesen screen shot" width="70%" />
                    <div className="card-content">
                        <h3>A secondary Card</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores
                            dolorem beatae nisi libero ullam voluptatem, expedita alias, minus cupiditate a amet
                            suscipit perferendis similique? Accusantium dignissimos voluptatem culpa iusto!</p>
                    </div>
                </div>
                <div className="card side-kick flex-col">
                    <img src="https://raw.githubusercontent.com/fvtt-fria-ligan/vaesen-foundry-vtt/master/asset/screen_shot.png"
                       alt="vaesen screen shot" width="70%" />
                    <div className="card-content">
                        <h3>A secondary Card</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet maiores
                            dolorem beatae nisi libero ullam voluptatem, expedita alias, minus cupiditate a amet
                            suscipit perferendis similique? Accusantium dignissimos voluptatem culpa iusto!</p>
                    </div>
                </div>

        </div>
    );


    };

}


export default DeckBox;