// ? Create a TaxStrategy interface with a method calculate(price).
// ? Implement at least 3 concrete strategies:
// ? IndiaTaxStrategy (18% GST)
// ? GermanyTaxStrategy (19% VAT)
// ? USATaxStrategy (accept state as input and apply appropriate tax: NY=0.08, CA=0.09)
// ? A TaxCalculator class should use the correct strategy at runtime.
// ? Bonus: Implement a factory that returns the correct strategy based on country (and state if applicable).

class TaxCalculator {

    constructor(strategy) {
        this.strategy = strategy;
    }

    calculateTax(income) {
        return this.strategy.calculateTax(income);
    }

}

class User {
    constructor(name, country, income) {
        this.name = name;
        this.country = country;
        this.income = income;
    }
}

class TaxStrategyFactory {
    static getStrategy(country) {
        switch (country) {
            case "india": return new IndianTaxStrategy();
            case "germany": return new GermanyTaxStrategy();
            case "usa": return new USATaxStrategy();
            default: throw new Error("Unsupported country");
        }
    }
}


class TaxStrategy {
    //! should be implemented by base Class
    calculateTax(income) {
        console.log("must be override by child classes.")
    }
}

class IndianTaxStrategy extends TaxStrategy {

    calculateTax(income) {
        console.log("INDIAN TOTAL TAX", income * 18 / 100);
    }

}

class GermanyTaxStrategy extends TaxStrategy {

    calculateTax(income) {
        console.log("INDIAN TOTAL TAX", income * 50 / 100);
    }

}

class USATaxStrategy extends TaxStrategy {

    calculateTax(income) {
        console.log("USA TOTAL TAX", income * 40 / 100);
    }

}


const indian = new User("xyz", "india", 15000);
const taxStrategyFactory = TaxStrategyFactory.getStrategy(indian.country);
const taxCalculator = new TaxCalculator(taxStrategyFactory);
taxCalculator.calculateTax(indian.income);