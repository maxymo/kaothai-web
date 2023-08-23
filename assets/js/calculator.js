const csvUrl = '/assets/price-table.csv';

async function calculateCateringCost(numberOfPeople, includeStarters, includeDrinks) {
    const response = await fetch(csvUrl);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    const lines = csv.split('\n');
    const cateringOption = lines.find(line => line.startsWith(numberOfPeople));
    const [people, price, startersPrice, drinksPrice] = cateringOption.split(',');
    const minimumFee = 560;

    let totalCost = Number(price) * numberOfPeople;

    if (includeStarters) {
        totalCost += Number(startersPrice) * numberOfPeople;
    }
    if (includeDrinks) {
        totalCost += Number(drinksPrice) * numberOfPeople;
    }

    if (totalCost < minimumFee){
        totalCost = minimumFee;
    }

    return totalCost;
}


