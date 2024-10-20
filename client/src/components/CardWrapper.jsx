export default function CardWrapper({ children }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",       // Ensures content stacks vertically
            padding: "20px",               // Adds padding inside the card
            margin: "20px",                // Space around the card
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",  // Soft shadow for depth
            borderRadius: "10px",          // Smooth rounded corners
            backgroundColor: "#fff",       // White background for card
            maxWidth: "400px",             // Restrict card's width
            width: "100%",                 // Ensures responsive width
        }}>
            {children}
        </div>
    );
}
