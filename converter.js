const RATES = {
    USD: 0.027,
    EUR: 0.025,
};

// for the second way you need ({ uah, currency })

function convert(uah, currency) {
    if (!RATES[currency]) {
        return null;
    }
    return uah * RATES[currency]
}