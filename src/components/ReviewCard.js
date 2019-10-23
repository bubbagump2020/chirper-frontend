import React from 'react'

export class ReviewCard extends React.Component{

    render(){
        return(
            <div>
                <h4>{this.props.title}</h4>
                <p>{this.props.content}</p>
            </div>
        )
    }


}