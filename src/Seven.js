
function Seven({ reviewers, reviews }) {
    return (
        <ul>
            {reviewers.map((reviewer, index) => (
                <li key={index}>
                    {reviewer}: {reviews[index]}
                </li>
            ))}
        </ul>
    );
}

export default Seven;
