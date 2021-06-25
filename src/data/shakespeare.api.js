/**
 *
 * @param {string} url
 */
function apiFetch(url) {
  return fetch(url, {
    headers: {
      "x-api-key": process.env.REACT_APP_SHAKESPEARE,
    },
  }).then((response) => response.json());
}

/**
 *
 * @param {string} id
 * @returns {Promise<{
 *    author: string,
 *    body: string,
 *    id: string,
 *    publish_date: string,
 *    rating: number
 *  }[]>}
 */
export async function getAllReviews() {
  const allReviews = await apiFetch(
    "https://shakespeare.podium.com/api/reviews"
  );

  if (process.env.REACT_APP_DEBUG) {
    console.log({ allReviews });
  }

  return allReviews;
}

/**
 *
 * @param {string} id
 * @returns {Promise<{
 *    author: string,
 *    body: string,
 *    id: string,
 *    publish_date: string,
 *    rating: number
 *  }>}
 */
export async function getReview(id) {
  const singleReview = await apiFetch(
    `https://shakespeare.podium.com/api/reviews/${id}`
  );

  if (process.env.REACT_APP_DEBUG) {
    console.log({ singleReview });
  }

  return singleReview;
}
