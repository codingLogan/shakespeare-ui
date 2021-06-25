function apiFetch(url) {
  return fetch(url, {
    headers: {
      "x-api-key": process.env.REACT_APP_SHAKESPEARE,
    },
  }).then((response) => response.json());
}

export async function getAllReviews() {
  const allReviews = await apiFetch(
    "https://shakespeare.podium.com/api/reviews"
  );

  if (process.env.REACT_APP_DEBUG) {
    console.log({ allReviews });
  }

  return allReviews;
}

export async function getReview(id) {
  const singleReview = await apiFetch(
    `https://shakespeare.podium.com/api/reviews/${id}`
  );

  if (process.env.REACT_APP_DEBUG) {
    console.log({ singleReview });
  }

  return singleReview;
}
