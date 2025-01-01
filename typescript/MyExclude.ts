type MyExclude<T, U> = T extends U ? never : T;

type test = MyExclude<string | number | boolean, boolean>;
