import React from 'react';

const data = [
    {
        name: "Scott Ayres",
        connections: 23,
        title: "Busting social media myths at the Social Media Lab",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    {
        name: "Richard Beeson",
        connections: 7,
        title: "SaaS Customer Onboarding Manager/Producer and...",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    {
        name: "Jacob Hilperts...",
        connections: 5,
        title: "Harness your social media content and engagement...",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    {
        name: "Stephanie Swee...",
        connections: 4,
        title: "Customer Support/Software QA Tester",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    {
        name: "Sarah Hecker",
        connections: 10,
        title: "Support & Affiliate Manager at Acme Inc.",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    {
        name: "Curt Ziegler",
        connections: 8,
        title: "Customer Support Hero at Acme Inc.",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    {
        name: "Hannah Recker",
        connections: 15,
        title: "Inbound & Marketing Operations",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    {
        name: "Michael Angilletta",
        connections: 20,
        title: "Growth Marketing | CMO | Acme Inc.",
        profileLink: "#",
        image: "/icon.png" // Reference to the image in the public folder
    },
    ];

const styles = {
gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px',
    padding: '10px'
    },
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center'
        
    },
    avatar: {
        width: '50px',
        height: '50px',
        backgroundColor: '#eee',
        borderRadius: '50%',
        margin: '0 auto 10px',
    },
    };

const Data = () => {
    return (
        <div style={styles.gridContainer}>
        {data.map((person, index) => (
            <div key={index} style={styles.card}>
            <img src={person.image} alt={person.name} style={styles.avatar} />
            <h3>{person.name}</h3>
            <p>{person.title}</p>
            <p>{person.connections} shared connections</p>
            <a href={person.profileLink}>
                <button>Connect</button>
            </a>
            </div>
        ))}
        </div>
    );
};

export default Data;
