import { AsyncStorage } from 'react-native'

const item = {
  key: "MjA3NTg0Nzc",
  currentQuantity: 1,
  summary: {
    manufacturer: "Nawaf store",
    seller: "Nawaf store",
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

const orders = [
  {
    orderId: '#000003',
    orderIssuedDate: 'Placed On Jan 10, 2019',
    deliveryStatus: 'processing',
    items: [item, item, item],
  },
  {
    orderId: '#000002',
    orderIssuedDate: 'Placed On Jan 10, 2019',
    deliveryStatus: 'shipped',
    items: [item],
  },
  {
    orderId: '#000001',
    orderIssuedDate: 'Placed On Jan 10, 2019',
    deliveryStatus: 'delivered',
    items: [item, item],
  },
]

export async function seedAsyncStorage() {
  AsyncStorage.setItem('cart', JSON.stringify([item, item]))
  AsyncStorage.setItem('starredItems', JSON.stringify([item]))
  AsyncStorage.setItem('orders', JSON.stringify(orders))
}
