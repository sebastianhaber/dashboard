export const CATEGORIES = [
  "Na drzewo",
  "Na ziemię",
  "Małe ptaki",
  "Małe ssaki",
  "Duże ssaki",
];

const newItem = (
  id = 0,
  name = "",
  imageUrl = "",
  price = 0,
  quantity = 0,
  categories = []
) => {
  return {
    id,
    name,
    imageUrl,
    price,
    quantity,
    categories,
  };
};

export const mocked_data = {
  products: [
    newItem(1, "Domek#1", "https://picsum.photos/200", 320, 123, [
      "Na drzewo",
      "Małe ptaki",
    ]),
    newItem(2, "Domek#2", "https://picsum.photos/250", 150, 21, [
      "Na drzewo",
      "Małe ptaki",
    ]),
    newItem(3, "Domek#3", "https://picsum.photos/150", 430, 16, [
      "Na ziemię",
      "Małe ssaki",
    ]),
    newItem(4, "Domek#4", "https://picsum.photos/120", 21, 3, [
      "Na ziemię",
      "Duże ssaki",
    ]),
    newItem(5, "Domek#5", "https://picsum.photos/210", 100, 999, [
      "Na drzewo",
      "Małe ssaki",
    ]),
  ],
};
