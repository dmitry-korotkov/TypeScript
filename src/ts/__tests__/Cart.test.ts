import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});
/*
test('get book item from cart', () => {
  const cart = new Cart();
  cart.add(new Book(421511, 'how to learn js', 'Korotkov Dmitry', 100, 333));
  expect(cart.items).toEqual([{
    id: 421511,
    name: 'how to learn js',
    author: 'Korotkov Dmitry',
    price: 100,
    pages: 333
  }]);
});
*/

test('get price of items without discount', () => {
  const cart = new Cart();
  cart.add(new Book(421511, 'how to learn js', 'Korotkov Dmitry', 100, 333));
  cart.add(new MusicAlbum(41121, 'Atypical', 'BONNIE X CLYDE', 500));
  cart.add(new Movie(14423, 'Мстители', 90, 'Stan Lee', true, 2012, "США", "Avengers...", 'фантастика, боевик', 137));
  expect(cart.priceWithoutDiscount()).toBe(690);
});

test('get price of items with discount 10 %', () => {
  const cart = new Cart();
  cart.add(new Book(421511, 'how to learn js', 'Korotkov Dmitry', 100, 333));
  cart.add(new MusicAlbum(41121, 'Atypical', 'BONNIE X CLYDE', 500));
  cart.add(new Movie(14423, 'Мстители', 90, 'Stan Lee', true, 2012, "США", "Avengers...", 'фантастика, боевик', 137));
  expect(cart.priceWithtDiscount(10)).toBe(621);
});

test('get cart without deleted item by ID', () => {
  const cart = new Cart();
  cart.add(new Book(421511, 'how to learn js', 'Korotkov Dmitry', 100, 333));
  cart.add(new MusicAlbum(41121, 'Atypical', 'BONNIE X CLYDE', 500));
  cart.add(new Movie(14423, 'Мстители', 90, 'Stan Lee', true, 2012, "США", "Avengers...", 'фантастика, боевик', 137));
  cart.deleteItem(14423)
  expect(cart.items).toEqual([{
      id: 421511,
      name: 'how to learn js',
      author: 'Korotkov Dmitry',
      price: 100,
      pages: 333
    },
    {
      id: 41121,
      name: 'Atypical',
      author: 'BONNIE X CLYDE',
      price: 500
    }
  ]);
});

test('get throw by uncorrect id', () => {
  expect(() => {
  const cart = new Cart();
  cart.add(new Book(421511, 'how to learn js', 'Korotkov Dmitry', 100, 333));
  cart.add(new MusicAlbum(41121, 'Atypical', 'BONNIE X CLYDE', 500));
  cart.add(new Movie(14423, 'Мстители', 90, 'Stan Lee', true, 2012, "США", "Avengers...", 'фантастика, боевик', 137));
  cart.deleteItem(99999)
  }).toThrow();
});

