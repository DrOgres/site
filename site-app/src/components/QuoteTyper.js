import { Component } from "react";

class QuoteTyper extends Component{ 
    constructor(props){
        super(props);
        this.state = {stringPartial: ''};
    }

render(){
    console.log(this.props);
    let quote = this.props.quote;
    let isDel = this.props.isDel;
    console.log(quote);
    console.log(isDel);
    // eslint-disable-next-line
    let delta = 550 - Math.random() * 100;

    this.setState({stringPartial: (quote, isDel) => {
        let delta = 550 - Math.random() * 100;
        let work = this.state.stringPartial;
        console.log(work);
        setInterval(() => {
            tick(quote, work.length, isDel);
    
            console.log(this.stringPartial);
    
            if (!isDel) {
                delta /= 2
            }
    
            if (!isDel && quote === this.state.stringPartial) {
                isDel = true;
                delta = 550 - Math.random() * 100;
            } else if (isDel && this.state.stringPartial === '') {
                isDel = false;
                delta = 550 - Math.random() * 100;
    
            }
    
        }, delta);

    }});
    
        
   
    return(
         this.state.stringPartial
    );
}
}

  







function tick(quote, length, isDel) {
    if (!isDel) {
        return quote.substring(0, length + 1);
    }
    return quote.substring(0, length - 1);
}

export default QuoteTyper;