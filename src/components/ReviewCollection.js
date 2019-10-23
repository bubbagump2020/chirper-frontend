import React from 'react'
import { ReviewCard } from './ReviewCard'

export class ReviewCollection extends React.Component {

    render(){
        return(
            <div>
                <h2>Your Reviews</h2>
                {this.props.reviews.map(review => {
                    return(
                        <ReviewCard {...review} key={review.id}/>
                    )
                })}
            </div>
        )
    }


}