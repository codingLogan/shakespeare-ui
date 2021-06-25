/**
 *
 * @param {{rating: number}} a
 * @param {{rating: number}} b
 */
function ratingAscendingSort(a, b) {
  if (a.rating == b.rating) {
    return 0;
  }

  return a.rating < b.rating ? -1 : 1;
}

/**
 *
 * @param {{rating: number}} a
 * @param {{rating: number}} b
 */
function ratingDescendingSort(a, b) {
  if (a.rating == b.rating) {
    return 0;
  }

  return a.rating > b.rating ? -1 : 1;
}

/**
 *
 * @param {{
 *  author: string,
 *  body: string,
 *  id: string,
 *  publish_date: string,
 *  rating: number
 * }[]} reviews
 */
function putBestFirst(reviews) {
  const sorted = [...reviews];
  sorted.sort(ratingDescendingSort);
  return sorted;
}

/**
 *
 * @param {{
 *  author: string,
 *  body: string,
 *  id: string,
 *  publish_date: string,
 *  rating: number
 * }[]} reviews
 */
function putWorstFirst(reviews) {
  const sorted = [...reviews];
  sorted.sort(ratingAscendingSort);
  return sorted;
}

/**
 *
 * @param {{publish_date: string}} a
 * @param {{publish_date: string}} b
 */
function recentFirstSort(a, b) {
  if (a.publish_date == b.publish_date) {
    return 0;
  }

  return a.publish_date > b.publish_date ? -1 : 1;
}

/**
 *
 * @param {{publish_date: string}} a
 * @param {{publish_date: string}} b
 */
function oldestFirstSort(a, b) {
  if (a.publish_date == b.publish_date) {
    return 0;
  }

  return a.publish_date < b.publish_date ? -1 : 1;
}

/**
 *
 * @param {{
 *  author: string,
 *  body: string,
 *  id: string,
 *  publish_date: string,
 *  rating: number
 * }[]} reviews
 */
function putOldestFirst(reviews) {
  const sorted = [...reviews];
  sorted.sort(recentFirstSort);
  return sorted;
}

/**
 *
 * @param {{
 *  author: string,
 *  body: string,
 *  id: string,
 *  publish_date: string,
 *  rating: number
 * }[]} reviews
 */
function putRecentFirst(reviews) {
  const sorted = [...reviews];
  sorted.sort(recentFirstSort);
  return sorted;
}

/**
 *
 * @param {{reviews: {
 *  author: string,
 *  body: string,
 *  id: string,
 *  publish_date: string,
 *  rating: number
 * }[], reviewSetter: function}} param0
 * @returns
 */
export default function ReviewActions({ reviews, reviewSetter }) {
  return (
    <div>
      <button
        onClick={() => {
          reviewSetter(putBestFirst(reviews));
        }}
      >
        Show Best First
      </button>
      <button
        onClick={() => {
          reviewSetter(putWorstFirst(reviews));
        }}
      >
        Show Worst First
      </button>
      <button
        onClick={() => {
          reviewSetter(putRecentFirst(reviews));
        }}
      >
        Most Recent First
      </button>
      <button
        onClick={() => {
          reviewSetter(putOldestFirst(reviews));
        }}
      >
        Show Oldest First
      </button>
    </div>
  );
}
