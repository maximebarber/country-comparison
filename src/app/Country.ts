export interface Country {
  name: string;
  official_name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  cioc: string;
  numericCode: string;
  callingCode: string;
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latLng: {
    country: [number, number];
    capital: [number, number];
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  area: number;
  gini: {
    [year: string]: number;
  };
  timezones: string[];
  borders: string[];
  nativeNames: {
    bar: {
      official: string;
      common: string;
    };
  };
  currencies: {
    [code: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [code: string]: string;
  };
  translations: {
    [code: string]: string;
  };
  flag: {
    small: string;
    medium: string;
    large: string;
  };
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
};

export interface CountryWithTopLevelDomain {
  [key: string]: {
    name: string;
    official_name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    cioc: string;
    numericCode: string;
    callingCode: string;
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latLng: {
      country: [number, number];
      capital: [number, number];
    };
    demonyms: {
      eng: {
        f: string;
        m: string;
      };
      fra: {
        f: string;
        m: string;
      };
    };
    area: number;
    gini: {
      [year: string]: number;
    };
    timezones: string[];
    borders: string[];
    nativeNames: {
      bar: {
        official: string;
        common: string;
      };
    };
    currencies: {
      [code: string]: {
        name: string;
        symbol: string;
      };
    };
    languages: {
      [code: string]: string;
    };
    translations: {
      [code: string]: string;
    };
    flag: {
      small: string;
      medium: string;
      large: string;
    };
    regionalBlocs: {
      acronym: string;
      name: string;
    }[];
  };
};

export type AllCountries = {
  [key: string]: CountryWithTopLevelDomain;
};

export const emptyCountry: Country = {
  name: '',
  official_name: '',
  topLevelDomain: [''],
  alpha2Code: '',
  alpha3Code: '',
  cioc: '',
  numericCode: '',
  callingCode: '',
  capital: '',
  altSpellings: [''],
  region: '',
  subregion: '',
  population: 0,
  latLng: {
    country: [0, 0],
    capital: [0, 0],
  },
  demonyms: {
    eng: {
      f: '',
      m: '',
    },
    fra: {
      f: '',
      m: '',
    },
  },
  area: 0,
  gini: {},
  timezones: [''],
  borders: [''],
  nativeNames: {
    bar: {
      official: '',
      common: '',
    },
  },
  currencies: {},
  languages: {},
  translations: {},
  flag: {
    small: '',
    medium: '',
    large: '',
  },
  regionalBlocs: [],
};
