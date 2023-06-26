const csvUrl = 'http://127.0.0.1:4000/assets/price-table.csv';

function calculatePrice(headcount, includeStarter, includeDrinks) {
    Papa.parse(csvUrl, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results);
            const data = results.data;
            const cateringOptions = data.find(option => option.headcount === headcount);

            if (!cateringOptions) {
                console.error("No catering options available for the given number of headcount.");
                return;
            }

            let total = cateringOptions.price * headcount;

            if (includeStarter) {
                total += cateringOptions.withStarter * headcount;
            }

            if (includeDrinks) {
                total += cateringOptions.withDrinks * headcount;
            }

            return total;
        }
    });
}

async function calculateCateringCost(numberOfPeople, includeStarters, includeDrinks) {
    const response = await fetch(csvUrl);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = decoder.decode(result.value);
    const lines = csv.split('\n');
    const cateringOption = lines.find(line => line.startsWith(numberOfPeople));
    const [people, price, startersPrice, drinksPrice] = cateringOption.split(',');

    let totalCost = Number(price) * numberOfPeople;

    if (includeStarters) {
        totalCost += Number(startersPrice) * numberOfPeople;
    }
    if (includeDrinks) {
        totalCost += Number(drinksPrice) * numberOfPeople;
    }

    return totalCost;
}


