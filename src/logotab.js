import React,{Component} from 'react';

class Logotab extends Component {

inputChange(event)
{
    console.log(event.target.value);
}
clicked(event)
{
    console.log('button clicked');
}
render() {
    return(
        <logotab>
         <div className='moury'>
             <h2> Login </h2>
             <br/>
                <p> Username: </p><input onChange={this.inputChange}/> <p> Password: </p>  <input type = 'password' onChange={this.inputChange}/>
                <br/> <br/>
         <button type='button' onClick={this.clicked}> Login </button>
         </div>
         </logotab>
    )
}
}
export default Logotab;