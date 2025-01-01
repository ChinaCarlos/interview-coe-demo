type User = {
  name: string;
  age: number;
};


type MyPick <T, K extends keyof T> {
  [P in K] : T[P]
}

type myPick = MyPick<User, 'name'>


