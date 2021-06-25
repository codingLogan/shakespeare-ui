import "./Review.css";
import Typography from "./Typography";

export function Review({ review }) {
  const { author, body, id, publish_date, rating } = review;
  const displayDate = new Date(publish_date);

  return (
    <div className="Review-container">
      <Typography size="md" bold>
        Rating: {rating}
      </Typography>
      <Typography size="sm" bold>
        {author}
      </Typography>
      <Typography size="sm">{displayDate.toDateString()}</Typography>
      <p>{body}</p>
    </div>
  );
}
