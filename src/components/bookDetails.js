import React, { Component } from 'react'
import { Badge, ListGroup, ListGroupItem , ListGroupItemHeading,ListGroupItemText} from 'reactstrap'
import '../css/styles.css'
class BookDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    renderbook(book) {
        if (book != null) {
            const comments = this.props.comments.map((comment) => {
                return (
                    <ListGroupItem key={comment.id}>
                        <h6>{comment.author}</h6>
                       <p>{comment.comment}</p> 
                    </ListGroupItem>
                )
            })
            return (
                <div className="jumbotron">
                    <div class="container">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img width="100%" src={book.coverImage} alt={book.title} />
                            </div>
                            <div className="col col-md">
                                <h2>{book.title}</h2>
                                <hr />
                                <h4>Author: {book.author} </h4>
                                <hr />
                                <h5>Resumé du livre</h5>
                                <p>{book.introduction}</p>
                                <br />
                                <h6><span>Commentaires:</span> <Badge pill> {book.comments.length} </Badge> J'aime: <Badge pill>{book.loveNumber}</Badge> </h6>
                                <hr />
                                <ListGroup>
                                <ListGroupItem active>
                                <ListGroupItemHeading>Commentaires <Badge>{book.comments.length}</Badge> </ListGroupItemHeading>
                                </ListGroupItem>
                                {comments}
                                </ListGroup>
                            </div>
                        </div>
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                </div>
            )
        }

    }
    render() {
        return (
            <div >

                {this.renderbook(this.props.book)}

            </div>
        )
    }
}

export default BookDetails
