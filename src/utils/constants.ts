export const PageSize = 10

export enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

export enum UserHeader {
  CustomerId = 'customer_id',
  FirstName = 'first_name',
  LastName = 'last_name',
  Age = 'age',
  Email = 'email',
  FavoriteColor = 'favorite_color',
  PhoneNumber = 'phone_number',
}

export enum ProductHeader {
  ProductId = 'product_id',
  ProductName = 'product_name',
  Category = 'category',
  ExpirationDate = 'expiration_date',
  Quantity = 'quantity',
  Price = 'price',
}

export const headerProductMapping = {
  [ProductHeader.ProductId]: 'Product ID',
  [ProductHeader.ProductName]: 'Product Name',
  [ProductHeader.Category]: 'Category',
  [ProductHeader.ExpirationDate]: 'Expiration Date',
  [ProductHeader.Quantity]: 'Quantity',
  [ProductHeader.Price]: 'Price',
}

export const headerUserMapping = {
  [UserHeader.CustomerId]: 'Customer ID',
  [UserHeader.FirstName]: 'First Name',
  [UserHeader.LastName]: 'Last Name',
  [UserHeader.Age]: 'Age',
  [UserHeader.Email]: 'Email',
  [UserHeader.FavoriteColor]: 'Favorite Color',
  [UserHeader.PhoneNumber]: 'Phone Number',
}
