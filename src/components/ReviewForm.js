import React from 'react'

class ReviewForm extends React.Component{

    constructor(){
        super()
        this.state = {
            title: '',
            content: ''
        }
    }

    createTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    createContent = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    createReview = (e) => {
        e.preventDefault()
        const token = localStorage.getItem('token')
        fetch('http://localhost:3001/reviews', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id: this.props.userID,
                title: this.state.title,
                content: this.state.content
            })
        })
        .then(response => response.json())
        .then(review => {
            this.props.addReview(review)
        })
    }

    render(){
        return(
            <div>
                <h2>This is the Form to add reviews</h2>
                <form onSubmit={e => this.createReview(e)}>
                    <div>
                        <label>Title</label><br></br>
                        <input type="text" onChange={e => this.createTitle(e)}/>
                    </div>
                    <div>
                        <label>Write Your Review</label><br></br>
                        <textarea rows="10" cols="50" onChange={e => this.createContent(e)}/>
                    </div>
                    <input type="submit" value="Submit Your Review!" />
                </form>
            </div>
        )
    }

}

export default ReviewForm