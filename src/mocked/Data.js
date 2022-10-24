export const CATEGORIES = {
  main: {
    tree: "Na drzewo",
    ground: "Na ziemię",
  },
  animals: {
    birds: "Ptaki",
    mammals: "Ssaki",
  },
};

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
      CATEGORIES.main.tree,
      CATEGORIES.animals.birds,
    ]),
    newItem(2, "Domek#2", "https://picsum.photos/250", 150, 21, [
      CATEGORIES.main.tree,
      CATEGORIES.animals.birds,
    ]),
    newItem(3, "Domek#3", "https://picsum.photos/150", 430, 16, [
      CATEGORIES.main.ground,
      CATEGORIES.animals.birds,
    ]),
    newItem(4, "Domek#4", "https://picsum.photos/120", 21, 3, [
      CATEGORIES.main.ground,
      CATEGORIES.animals.birds,
    ]),
    newItem(5, "Domek#5", "https://picsum.photos/210", 100, 999, [
      CATEGORIES.main.tree,
      CATEGORIES.animals.mammals,
    ]),
  ],
};
