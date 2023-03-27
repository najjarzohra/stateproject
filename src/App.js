
import './App.css';
import React,{Component}from 'react';
import File from  './components/File';
import Card from 'react-bootstrap/Card';
import Pic from './Pic.jpg';



export class App extends Component{
  constructor(){
    super();
    this.state={
      Person:{
      fullName:'Zohra Najjar',
      profession:"I'm a fullstack JS developper",
      imageSrc:"./Pic.jpg"
    },
    show:false
  }
}
handleShowPerson = () => {
  this.setState({
    ...this.state.Person,
    show: !this.state.show,
  });
}




render(){
  return (
    
<div className="App"  style={{ display: 'flex', justifyContent: 'center' ,alignItems: 'center', height: '100vh',color:'babybleu' }}>
      <Card  className="card" style={{ width: '20rem' ,border :'3px solid black' }}>
      <Card.Body>
        
     
      {this.state.show &&(
      <> 
 <img src={Pic} width="320px"/><hr/>
<h1> {this.state.Person.fullName}</h1><br/>
<h1> {this.state.Person.profession}</h1><br/>

</>
     )}
<button onClick={this.handleShowPerson}>show/hide</button><br/>
      
<File/>
</Card.Body>
</Card>
</div>


  );
  
}
}

export default App ;
