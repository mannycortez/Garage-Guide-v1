export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
  about: string;
}

export interface Garage {
  name: string;
  address: string;
  gmapUrl: string;
}
