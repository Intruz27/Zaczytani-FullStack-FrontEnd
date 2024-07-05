export interface PartsInterface {
  id: string;
  title: string;
  brand: string;
  model: string;
  condition: string;
  description: string;
  delivery: boolean;
  price: string;
  imageLink: string;
  imageLink2: string;
  imageLink3: string;
}

export interface CarsInterface {
  id: string;
  brand: string;
  model: string;
  version: string;
  body: string;
  box: string;
  fuel: string;
  engineCapacity: string;
  fuelConsumption: string;
  isHybrid: boolean;
  mileage: string;
  yearOfProduction: string;
  price: string;
  description: string;
  imageLink: string;
  imageLink2: string;
  imageLink3: string;
}

export interface UserRegisterInterface {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  token: string;
  role: string;
  email: string;
}

export interface UserLoginInterface {
  userName: string;
  password: string;
}
