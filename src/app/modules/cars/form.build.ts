import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
export function createCarForm(): FormGroup {
  return new FormBuilder().group({
    id: new FormControl(null),
    brand: new FormControl(null),
    model: new FormControl(null),
    version: new FormControl(null),
    body: new FormControl(null),
    box: new FormControl(null),
    fuel: new FormControl(null),
    engineCapacity: new FormControl(null),
    fuelConsumption: new FormControl(null),
    isHybrid: new FormControl(null),
    mileage: new FormControl(null),
    yearOfProduction: new FormControl(null),
    price: new FormControl(null),
    description: new FormControl(null),
    imageLink: new FormControl(null),
    imageLink2: new FormControl(null),
    imageLink3: new FormControl(null),
  });
}

export function createPartForm(): FormGroup {
  return new FormBuilder().group({
    id: new FormControl(null),
    title: new FormControl(null),
    brand: new FormControl(null),
    model: new FormControl(null),
    condition: new FormControl(null),
    description: new FormControl(null),
    delivery: new FormControl(null),
    price: new FormControl(null),
    imageLink: new FormControl(null),
    imageLink2: new FormControl(null),
    imageLink3: new FormControl(null),
  });
}

export function createUserForm(): FormGroup {
  return new FormBuilder().group({
    id: new FormControl(null),
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    userName: new FormControl(null),
    password: new FormControl(null),
    token: new FormControl("token"),
    role: new FormControl("admin"),
    email: new FormControl(null),
  });
}

export function logUserForm(): FormGroup {
  return new FormBuilder().group({
    userName: new FormControl(null),
    password: new FormControl(null),
  });
}
