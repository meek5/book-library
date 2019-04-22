import React, { Component } from 'react'
import { Card, CardImg, CardText, CardFooter, CardTitle, Button } from 'reactstrap'
import '../css/styles.css'
import BookDetails from './bookDetails'
class Book extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedBook:null,
            comments:[]
        }
    }

    selectedBook(book) {
        this.setState({
            selectedBook: book,
            comments: book.comments
        }, () => {
            console.log(book)
            console.log(book.comments)
        })
    }

    render() {

        const books = this.props.books.map((book) => {
            return (
                <div key={book.id} className="col-12 col-md-4 mt-2 mb-2">
                    <Card>
                        <CardImg width="100%" height="300px" src={book.coverImage} onClick={()=>this.selectedBook(book)}/>
                        <CardTitle className="text-center"> <h4>{book.title} </h4> <span>Author: {book.author} </span></CardTitle>
                        <hr/>
                        <CardText>{book.description}</CardText>

                        <CardFooter>
                        <Button onClick={()=>this.selectedBook(book)}>View</Button>
                        </CardFooter>
                    </Card>
                </div>
            );
        })

        return (
            <div>
                <BookDetails book={this.state.selectedBook} comments={this.state.comments}/>
                <div className="container">

                    <div className="row">
                        {books}
                    </div>
                </div>
            </div>
        )
    }

}

export default Book