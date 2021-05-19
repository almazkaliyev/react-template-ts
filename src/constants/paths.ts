interface SingleParamPathConstructor {
  (param: string | number): string;
}

interface PathConstructors {
  example: SingleParamPathConstructor;
}

export enum Paths {
  main = '/',
  login = '/login',
}

export const pathConstructors: PathConstructors = {
  example: (id) => `examples/${id}`,
};

export interface SingleAddressParams {
  addressId: string;
}

export interface SingleCouponParams {
  couponId: string;
}
