import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//import Header1 from './header1';
import newsList from './newslist';
import Logotab from './logotab';



class App extends Component {
constructor(props) {
    super(props)
    
    this.state= {
        news:JSON
    }
}
render() {
  return (
        <form className='body'>
            <img src='./logo8.png' alt='Sai madireddy' width='200px' height='100px'/>
             <Logotab/>
             <newsList newsdata={this.state.news}/>
        </form>
    )
}
}
ReactDOM.render(<App/>,document.querySelector('#root'));

