import React, { Component } from "react";
import CardContainer from "./CardContainer";


class DeckBox extends Component {
    render() {

        // TODO get data from json and build each card in deck box from data
        return (
            <div className="deck-box content flex-row wrap gap">
            <CardContainer />
            </div>
        );


    };

}


export default DeckBox;