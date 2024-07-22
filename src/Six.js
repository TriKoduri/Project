import Seven from './Seven';

function Six() {
    const reviewers = ["Kyathi", "Harshini"];
    const reviews = ["This product is good", "I liked this product"];

    return (
        <div>
            <h2>Reviews</h2>
            <Seven reviewers={reviewers} reviews={reviews} />
        </div>
    );
}

export default Six;
