import React from 'react'
import { ReviewCard } from './ReviewCard'

export class ReviewCollection extends React.Component {

    handleClick = (e) => {

    }

    render(){
        return(
            <div>
                <h2>Your Reviews</h2>
                {this.props.reviews.map(review => {
                    return(
                        <ReviewCard {...review} key={review.id} handleClick={e => this.handleClick(e)}/>
                    )
                })}
            </div>
        )
    }


}