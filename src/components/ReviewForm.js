import React from 'react'

class ReviewForm extends React.Component{

    constructor(){
        super()
        this.state = {
            title: '',
            content: ''
        }
    }

    createReview = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        fetch('http://localhost:3001/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                content: this.state.content
            })
        })
    }

    render(){
        return(
            <div>
                <h2>This is the Form to add reviews</h2>
                <form onSubmit={e => this.createReview(e)}>
                    <div>
                        <label>Title</label><br></br>
                        <input type="text" value={this.state.title} onChange={e => this.setState({ title: e.target.value })}/>
                    </div>
                    <div>
                        <label>Write Your Review</label><br></br>
                        <textarea rows="10" cols="50" value={this.state.content} onChange={e => this.setState({ content: e.target.value })} />
                    </div>
                    <input type="submit" value="Submit Your Review!" />
                </form>
            </div>
        )
    }

}

export default ReviewForm