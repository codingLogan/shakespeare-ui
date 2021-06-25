import "./Review.css";
import Typography from "./Typography";

/**
 *
 * @param {{
 *  review: {
 *    author: string,
 *    body: string,
 *    id: string,
 *    publish_date: string,
 *    rating: number
 *  }
 * }} props
 */
export function Review({ review }) {
  const { author, body, publish_date, rating } = review;
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
