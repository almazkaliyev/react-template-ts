type SingleParamEndpointConstructor = (param: string) => string;
// type TwoParamEndpointConstructor = (firstParam: string, secondParam: string) => string;

interface Endpoints {
  example: SingleParamEndpointConstructor;
}

export const endpoints: Endpoints = {
  example: (id) => `/example/${id}`,
};
