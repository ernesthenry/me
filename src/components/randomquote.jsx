import React  from 'react'
class Quote extends React.Component {
    constructor(props) {
    super(props);
     }
    render() {
      return (
        <div>
          <div id="text">{this.props.quote}</div>
          <div id="author">{this.props.author}</div>
        </div>
      );
    }
  }
  
  class QuoteBox extends React.Component {
    constructor() {
      super();
      this.state = {
        quote: "",
        data: {},
        count:0
      };
      this.clickHandle = this.clickHandle.bind(this);
    }
    componentDidMount() {
        fetch(
          "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        )
          .then(response => response.json())
          .then(data => {
            this.setState({
              data: data,
            });
          });    
      }
    clickHandle() {
      const randomIndex = Math.floor(Math.random() * 102);   
      this.setState({
        quote: this.state.data.quotes[randomIndex],
        count: this.state.count+1
      });
    }
  
   render() {
     
      return (
        <div id="quote-box">
          <Quote
            quote={this.state.quote.quote}
            author={this.state.quote.author}
          />
          <button id="new-quote" onClick={this.clickHandle}>
            {this.state.count===0 ? 'Get Quote':'Next Quote'}
          </button>
        </div>
      );
    }
  }

  export default Quote;