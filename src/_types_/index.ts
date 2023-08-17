export interface Product {
  product_id: number
  product_name: string
  category: string
  expiration_date: string
  quantity: number
  price: number
}

export interface User {
  customer_id: number
  first_name: string
  last_name: string
  age: number
  email: string
  favorite_color: string
  phone_number: string
}
