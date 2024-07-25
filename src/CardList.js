import CardUI from "./Card";

function CardListUI() {
    const name = "ReactJS";
    const college = "SVECW";
    const userObject = { Description: "Class 1 Bluetooth for exceptional wireless connectivity, USB-C audio for simultaneous listening and charging,¹⁰ and 3.5mm analogue input for wired audio sources.", Price: "Rs 19999" };
    const users = ["Beats Headphones"];
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                users.map((user, index) => (
                    <CardUI key={index}
                        program={name}
                        col={college}
                        user={userObject}
                        userFromArray={user} />
                ))
            }
        </div>
    );
}

export default CardListUI;
