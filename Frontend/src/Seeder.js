import { AsyncStorage } from 'react-native'

const item = {
  key: "MjA3NTg0Nzc",
  currentQuantity: 1,
  summary: {
    manufacturer: "Nawaf store",
    itemName: "Nintendo Switch",
    price: "$299.00",
    quantity: 100,
    rating: 4.8,
    reviews_count: 69,
    primary_specifications: [
      { specKey: 'Color', specValue: 'Black' },
      { specKey: 'Size', specValue: '64 GB'}
    ],
  },
  image: "http://shopofly.xyz/storage/listingsImages/ODU4MzQ1NjE.jpg",
}

export async function seedAsyncStorage() {
  await AsyncStorage.setItem('cart', JSON.stringify([item, item]))
  await AsyncStorage.setItem('starredItems', JSON.stringify([item]))
}
