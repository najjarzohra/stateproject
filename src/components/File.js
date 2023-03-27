import React ,{Component} from "react";
export class App extends Component{
  constructor(){
    super();
    this.state={
        counter:0,
        timer:0,
        interval:null,
    }

  }
   
  componentDidMount(){
    console.log('componentDidMount');
    this.setState({
        interval:setInterval (() => this.setState({timer:this.state.timer+1}),
        1000)
        
        
 });
  }

  

    render(){
        return( 
        
        <div>

    <p> {this.state.timer}</p>
    
        </div>
        
        );
    }
}
export default App;