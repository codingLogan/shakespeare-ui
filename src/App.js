import logo from "./logo.svg";
import "./App.css";
import { useReviews } from "./shakespeare.hooks";
import { Review } from "./Review";

function App() {
  // Load all of the reviews
  const { reviewsLoading, reviews } = useReviews();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Shakespeare Reviews</p>

        {reviewsLoading && <div>Loading...</div>}

        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {process.env.REACT_APP_SHAKESPEARE}
        </a>
      </header>
    </div>
  );
}

export default App;
