import { ConnectKitButton } from "connectkit";

const Button = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
          <button
            onClick={show}
            style={{
              fontSize: "0.9rem",
              background: "#902784",
              color: "white",
              border: "none",
              padding: "10px 25px",
              borderRadius: "5px",
            }}
          >
            {isConnected ? address : "Custom Connect"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default Button;
