import React from 'react'

const Hello = () => {
    // Using JSX

    // return(
    //     <div>
    //         <h1>Hello Shivani!</h1>
    //     </div>
    // )

    //Without using JSX
    return React.createElement(
        'div',
        {id: 'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello Shivani')
    )


}

export default Hello