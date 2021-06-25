import logo from "./logo.svg";
import shakespeare from "./images/shakespeare.jpg";
import "./App.css";
import { useReviews } from "./shakespeare.hooks";
import { Review } from "./Review";
import Content from "./Content";
import LoadingIndicator from "./LoadingIndicator";

function App() {
  // Load all of the reviews
  const { reviewsLoading, reviews } = useReviews();

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Shakespeare Reviews</h1>

        <img
          className="App-landing-image"
          src={shakespeare}
          alt="shakespeare"
        />

        <Content>
          {reviewsLoading && <LoadingIndicator />}

          {reviews.map((review) => (
            <Review review={review} key={review.id} />
          ))}
        </Content>
      </header>
    </div>
  );
}

export default App;
