import img from "./7VE.gif";

interface ErrorMessageProps{
  message?:string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
<div style={{ textAlign: "center" }}>
      <img
        style={{
          display: "block",
          width: "250px",
          height: "250px",
          objectFit: "contain",
          margin: "0 auto",
        }}
        src={img}
        alt="Error"
      />
      <p style={{ marginTop: "16px", color: "red", fontSize: "18px" }}>
        {message || "Карточки не были загружены по какой-то причине..."}
      </p>
    </div>
  );
};

export default ErrorMessage;
