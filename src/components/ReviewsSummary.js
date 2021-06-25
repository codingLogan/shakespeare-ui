import "./ReviewsSummary.css";
import Typography from "./Typography";

export default function ReviewsSummary({ average, reviewsNumber }) {
  return (
    <div className="ReviewsSummary-container">
      <Typography size="xl" bold>
        Average Rating: {average.toFixed(2)}
      </Typography>
      <Typography size="lg" bold>
        Total Reviews: {reviewsNumber}
      </Typography>
    </div>
  );
}
