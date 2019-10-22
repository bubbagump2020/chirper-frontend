import React from 'react'
import { ReviewCard } from './ReviewCard'

export class ReviewCollection extends React.Component {

    render(){
        return(
            <div>
                <h1>This is the Collection of Reviews</h1>
                <ReviewCard />
            </div>
        )
    }


}