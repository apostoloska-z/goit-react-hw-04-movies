const Reviews = ({reviews}) => (
<>
    {
        reviews.length > 1 ?
            
        <ul>
                {reviews.map(review =>
                    <li>
                        <h3>Author: {review.author}</h3>
                        <p>{review.content}</p>
                    </li>)}
        </ul>
        : <h3>Sorry, there are no reviews available for this movie.</h3>
    }
</>
)

export default Reviews;