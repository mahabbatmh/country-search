export default class Country {
    constructor({ currencies, flag, name, capital, altSpellings, region, population, borders, loaded }){
        this.currencies = currencies;
        this.flag = flag;
        this.name = name;
        this.capital = capital;
        this.altSpellings = altSpellings;
        this.region = region;
        this.population = population;
        this.borders = borders;
        this.loaded = loaded;
    }
}
