export function Review({ review }) {
  const { author, body, id, publish_date, rating } = review;
  return (
    <>
      <div>{author}</div>
      <div>{body}</div>
      <div>{id}</div>
      <div>{publish_date}</div>
      <div>{rating}</div>
    </>
  );
}
