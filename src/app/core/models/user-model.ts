export interface UserModel {
  id: number,
  name: number,
  username: string,
  email: string,
  website: string;
  phone: string,
  address: {
    city: string;
    street: string
  }
}
