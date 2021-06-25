import {
  putBestFirst,
  putWorstFirst,
  putOldestFirst,
  putRecentFirst,
} from "./ReviewActions";

const sampleData = [
  {
    author: "Kaley Schiller",
    body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    id: "9783221620868",
    publish_date: "2016-09-05T23:25:47.642350Z",
    rating: 0.8,
  },
  {
    author: "Fay Lemke",
    body: "Can one desire too much of a good thing?.",
    id: "9793364045824",
    publish_date: "2016-09-04T23:25:47.642388Z",
    rating: 3.2,
  },
  {
    author: "Tatyana Olson",
    body: "How bitter a thing it is to look into happiness through another man's eyes!",
    id: "9784620626604",
    publish_date: "2016-09-03T23:25:47.642545Z",
    rating: 4.1,
  },
];

test("put best first", () => {
  expect(putBestFirst(sampleData)[0].rating).toBe(sampleData[2].rating);
  expect(putBestFirst(sampleData)[2].rating).toBe(sampleData[0].rating);
});

test("put worst first", () => {
  expect(putWorstFirst(sampleData)[0].rating).toBe(sampleData[0].rating);
  expect(putWorstFirst(sampleData)[2].rating).toBe(sampleData[2].rating);
});

test("put oldest first", () => {
  expect(putOldestFirst(sampleData)[0].publish_date).toBe(
    sampleData[2].publish_date
  );
  expect(putOldestFirst(sampleData)[2].publish_date).toBe(
    sampleData[0].publish_date
  );
});

test("put recent first", () => {
  expect(putRecentFirst(sampleData)[0].publish_date).toBe(
    sampleData[0].publish_date
  );
  expect(putRecentFirst(sampleData)[2].publish_date).toBe(
    sampleData[2].publish_date
  );
});
