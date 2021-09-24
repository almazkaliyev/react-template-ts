export type NoParamEndpointContructor = () => string;

export type SingleParamEndpointContructor<T> = (param1: T) => string;
