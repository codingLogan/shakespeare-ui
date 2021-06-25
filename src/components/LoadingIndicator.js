import shakespeareLoading from "../images/shakespeare-circle.png";

export default function LoadingIndicator() {
  return (
    <div>
      <img src={shakespeareLoading} className="App-logo" alt="logo" />
      <div>Loading Reviews...</div>
    </div>
  );
}
