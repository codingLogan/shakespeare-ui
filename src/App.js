import shakespeare from "./images/shakespeare.jpg";
import "./App.css";
import { useReviews } from "./data/shakespeare.hooks";
import { Review } from "./components/Review";
import ReviewsSummary from "./components/ReviewsSummary";
import Content from "./components/Content";
import LoadingIndicator from "./components/LoadingIndicator";
import ReviewActions from "./components/ReviewActions";

function App() {
  // Load all of the reviews
  const { reviewsLoading, reviews, average, setReviews } = useReviews();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shakespeare Reviews</h1>

        <img
          className="App-landing-image"
          src={shakespeare}
          alt="shakespeare"
        />
      </header>
      <Content>
        {reviewsLoading && <LoadingIndicator />}

        {!reviewsLoading && (
          <ReviewsSummary average={average} reviewsNumber={reviews.length} />
        )}

        <ReviewActions reviews={reviews} reviewSetter={setReviews} />

        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </Content>
    </div>
  );
}

export default App;
