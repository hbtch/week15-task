const cities = [Москва, Санкт-Петербург, Екатеринбург, Казань];
let temperatures = [];
for (let i = 0; i < cities.length; i++) {
    let temperature = promt('Введите город ${cities[i]}');
    temperatures.push(Number(temperature));
}