// Массив цитат и авторов
var quotes = [
    {quote: "«Когда все двигаются вперёд совместными усилиями, успех приходит сам собой»", author: "Генри Форд"},
    {quote: "Давайте все станем такими лидерами, каких мы пожелали бы себе»", author: "Саймон Синек"},
    {quote: "«Не сомневайтесь в том, что небольшая группа мыслящих и самоотверженных людей может изменить мир. В действительности только лишь они и привносят эти изменения»", author: "Маргарет Мид"},
    {quote: "«В командной работе хорошо то, что у вас всегда есть единомышленники»", author: "Маргарет Карти"},
    {quote: "«Один человек может быть ключевым элементом команды, но один человек никогда не будет командой»", author: "Карим Абдул-Джаббар"},
    {quote: "«Индивидуальная приверженность групповой работе — именно это заставляет работать команду, компанию, общество, цивилизацию»", author: "Винс Ломбарди"},
    {quote: "«Наша любовь настолько велика, что в ней есть место для всех»", author: "Кари Туна"},
    {quote: "«Успешные коллективы внедряют командное взаимодействие в свою культуру, формируя тем самым кирпичики, из которых строится их успех»", author: "Тед Сундквист"},
    {quote: "«Что люди могут выбирать, то они могут и изменить»", author: "Мадлен Олбрайт"},
    {quote: "«Есть люди, которые хотят чего-то, есть люди, которые мечтают о чём-то, а есть люди, которые это делают»", author: "Майкл Джордан"},
    {quote: "«Настоящих героев делает тяжёлый труд и цельность характера»", author: "Хоуп Соло"},
    {quote: "«Только упорный труд даёт желаемый результат. Только упорный труд несёт желаемые изменения»", author: "Шонда Раймс"},
    {quote: "«Задача успешной компании состоит в том, чтобы её лояльные клиенты сами стали инициаторами перемен»", author: "Саймон Мэйнваринг"},
    {quote: "«Я не обязан побеждать, но я обязан быть искренним. Я не обязан преуспевать, но я обязан прожить жизнь достойным человеком»", author: "Авраам Линкольн"},
    {quote: "«Никто не может заставить вас чувствовать себя неполноценным без вашего согласия»", author: "Элеонор Рузвельт"},
    {quote: "«Ценить нужно подлинную продуктивность труда, а не показную усталость»", author: "Скотт Белски"},
    {quote: "«Не бойтесь следовать за своим сердцем и интуицией. Они откуда-то уже знают, кем вы на самом деле хотите стать. Всё остальное не так важно»", author: "Стив Джобс"},
    {quote: "«Ключом к успешному лидерству сегодня является влияние, а не авторитет»", author: "Кен Бланшар"},
];

// Функция для генерации случайной цитаты
function generateQuote() {
    // Случайным образом выбираем цитату из массива
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];

    // Выводим цитату и автора на страницу
    document.getElementById("quote").innerHTML = quote.quote;
    document.getElementById("author").innerHTML = "- " + quote.author;
}