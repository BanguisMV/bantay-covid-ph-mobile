export interface Country {
    updated:                number;
    country:                string;
    countryInfo:            CountryInfo;
    cases:                  number;
    todayCases:             number;
    deaths:                 number;
    todayDeaths:            number;
    recovered:              number;
    todayRecovered:         number;
    active:                 number;
    critical:               number;
    casesPerOneMillion:     number;
    deathsPerOneMillion:    number;
    tests:                  number;
    testsPerOneMillion:     number;
    population:             number;
    continent:              string;
    oneCasePerPeople:       number;
    oneDeathPerPeople:      number;
    oneTestPerPeople:       number;
    undefined:              number;
    activePerOneMillion:    number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion:  number;
}

export interface CountryInfo {
    _id:  number;
    iso2: string;
    iso3: string;
    lat:  number;
    long: number;
    flag: string;
}

export interface History {
    country:  string;
    province: string[];
    timeline: Timeline;
}

export interface Timeline {
    cases:     { [key: string]: number };
    deaths:    { [key: string]: number };
    recovered: { [key: string]: number };
}
