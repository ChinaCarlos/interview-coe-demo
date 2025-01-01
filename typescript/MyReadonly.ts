type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Info = {
  name: string;
  age: number;
};

type myonly = MyReadOnly<Info>;
