import React from 'react';

const newsList =(props) => {
    console.log(props);


    const items = props.newsdata.map((item) => {
        return(
            <div>
                {item.title}
            </div>
        )
    })
    return(
        <div>{items}</div>
    )

}
export default newsList;
