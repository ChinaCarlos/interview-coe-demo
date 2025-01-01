type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type Foot = {
  name: string;
  price: number;
};

type GreatFoot = MyOmit<Foot, "name">;
