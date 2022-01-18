export interface IContinents {
  code: string;
  name: string;
}

export interface IContinentsQueryResult {
  continents: Array<IContinents>;
}

export interface ILanguage {
  name: string;
}

export interface ICountry {
  name: string;
  capital: string;
  currency: string;
  languages: Array<ILanguage>;
}

export interface ISingleContinent {
  name: string;
  countries: Array<ICountry>;
}

export interface ISingleContinentQueryResult {
  continent: ISingleContinent;
}
