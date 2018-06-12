import React, {Component} from 'react';

class Header extends Component {

    inputChange(event)
    {
        console.log(event.target.value);
    }
    render() {
    
        return(
            <header>
                <div  className='johny' onClick={()=>console.log("Item Clicked")}>
                    Login Screen
                </div>
            </header>
        )
    }
}
export default Header;
