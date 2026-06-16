const data = [{
  coordinate_x : 55.73,
  coordinate_y : 37.75,
  hintContent : "метка 1"
}, {
  coordinate_x : 55.81,
  coordinate_y :  37.75,
  hintContent : "метка 2"},
  {
    coordinate_x : 55.91,
    coordinate_y :  37.75,
    hintContent : "метка 3"}
];

const categoriesData = {
  category1 : [{
    lat: 55.73,
    lon : 37.75,
    name : "метка 1 - категория 1"
  },
  {
    lat: 55.91,
    lon : 37.75,
    name : "метка 2 - категория 1"
  }],
  category2 : [{
    lat: 55.81,
    lon : 37.75,
    name : "метка 1 - категория 2"
  },
  {
    lat: 55.91,
    lon : 37.75,
    name : "метка 2 - категория 2"
  }],
  category3 : [{
    lat: 55.91,
    lon : 37.75,
    name : "метка 1 - категория 3"
  },
  {
    lat: 55.82,
    lon : 37.75,
    name : "метка 2 - категория 3"
  }]
}

function initData() {
  return init(data);
}

ymaps.ready(initData);

function init(data_arr){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.73, 37.75],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 9
    },
    {
      searchControlProvider: 'yandex#search'
    })

    let activeCategory = "category2";

    function showCategory(category) {
      myMap.geoObjects.removeAll();

      categoriesData[category].forEach((item) => {
        const placeMark = new ymaps.Placemark([item.lat, item.lon], {
          hintContent: item.name,
          balloonContent: item.name
        }, {

          iconLayout: 'default#image',
          iconImageHref: 'img/icon-arrow.png',
          iconImageSize: [30, 42],
          iconImageOffset: [-5, -38]
        })

        myMap.geoObjects.add(placeMark);
      })

      activeCategory = category;
    };

   const categoryButtons = document.querySelector('#housing-type');

  categoryButtons.addEventListener("change", (evt) => {
        const category = evt.currentTarget.value;
        showCategory(category);
      })

  showCategory(activeCategory);
}

/*   categoryButtons.addEventListener("change", (evt) => {
      const category = evt.target.value;
      console.log(category);
    }) */

/*
  ДОБАВИТЬ ОБЪЕКТ
      var myMap = new ymaps.Map("map", {
            center: [54.83, 37.11],
            zoom: 5
        }
  myPlacemark = new ymaps.Placemark[55.907228, 31.260503];
  myMap.geoObjects.add(myPlacemark);

  ДОБАВИТЬ МАССИВ ОБЪЕКТОВ
      var myMap = new ymaps.Map("map", {
            center: [55.73, 37.75],
            zoom: 9
        },
  markArrayCollection = new ymaps.GeoObjectCollection(),
  markArrays = [[55.73, 37.75], [55.81, 37.75]];
  for (var i = 0, l = markArrays.length; i < l; i++) {
    markArrayCollection.add(new ymaps.Placemark(markArrays[i]));
  }
  myMap.geoObjects.add(markArrayCollection);
  */

  /*
  ДОБАВИТЬ МЕТКУ С БАЛУНОМ
  myPlacemark = new ymaps.Placemark([55.907228, 31.260503], {
    // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
    balloonContentHeader: "Балун метки",
    balloonContentBody: "Содержимое <em>балуна</em> метки",
    balloonContentFooter: "Подвал",
    hintContent: "Хинт метки"
});

myMap.geoObjects.add(myPlacemark);

СОБСТВЕННЫЙ ЗНАЧОК МЕТКИ С ИСПОЛЬЗОВАНИЕМ СТОРОННЕГО .PNG ФАЙЛА И БАЛУНА
var myMap = new ymaps.Map("map", {
            center: [55.73, 37.75],
            zoom: 9
        },
myPlacemark = new ymaps.Placemark([55.661574, 37.573856], {
  hintContent: 'Собственный значок метки',
  balloonContent: 'Это красивая метка'
}, {
  // Опции.
  // Необходимо указать данный тип макета.
  iconLayout: 'default#image',
  // Своё изображение иконки метки.
  iconImageHref: 'img/icon-arrow.png',
  // Размеры метки.
  iconImageSize: [30, 42],
  // Смещение левого верхнего угла иконки относительно
  // её "ножки" (точки привязки).
  iconImageOffset: [-5, -38]
})

myMap.geoObjects.add(myPlacemark)*/

  /*
  ПОКАЗАТЬ ДВЕ МЕТКИ
  yellowCollection = new ymaps.GeoObjectCollection(null, {
      preset: 'islands#yellowIcon'
  }),

  yellowCoords = [[55.73, 37.75], [55.81, 37.75]];
  for (var i = 0, l = yellowCoords.length; i < l; i++) {
    yellowCollection.add(new ymaps.Placemark(yellowCoords[i]));
}

myMap.geoObjects.add(yellowCollection);

// Через коллекции можно подписываться на события дочерних элементов.
yellowCollection.events.add('click', function () { alert('Кликнули по желтой метке') });

ФИЛЬТРАЦИЯ МЕТОК

const categoriesData = {
  category1 : [{
    lat: 55.73,
    lon : 37.75,
    name : "метка 1 - категория 1"
  },
  {
    lat: 55.91,
    lon : 37.75,
    name : "метка 2 - категория 1"
  }],
  category2 : [{
    lat: 55.81,
    lon : 37.75,
    name : "метка 1 - категория 2"
  },
  {
    lat: 55.91,
    lon : 37.75,
    name : "метка 2 - категория 2"
  }],
  category3 : [{
    lat: 55.91,
    lon : 37.75,
    name : "метка 1 - категория 3"
  },
  {
    lat: 55.82,
    lon : 37.75,
    name : "метка 2 - категория 3"
  }]
}

...
    let activeCategory = "category2";

    function showCategory(category) {
      myMap.geoObjects.removeAll();

      categoriesData[category].forEach((item) => {
        const placeMark = new ymaps.Placemark([item.lat, item.lon], {
          hintContent: item.name,
          balloonContent: item.name
        }, {

          iconLayout: 'default#image',
          iconImageHref: 'img/icon-arrow.png',
          iconImageSize: [30, 42],
          iconImageOffset: [-5, -38]
        })

        myMap.geoObjects.add(placeMark);
      })

      activeCategory = category;
    };

    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach((button) => {
      button.addEventListener("click", (evt) => {
        const category = evt.currentTarget.dataset.category;
        showCategory(category);
      })
    })

    showCategory(activeCategory);

    //ТОЖЕ САМОЕ, НО С SELECT
        <form action="#" class="map__filters" autocomplete="off">
      <select name="housing-type" id="housing-type" class="category-button">
        <option class="button" value="category1">Дворец</option>
        <option class="button" value="category2">Квартира</option>
        <option class="button" value="category3">Дом</option>
      </select>
    </form>

    ....
    const categoryButtons = document.querySelector('#housing-type');

  categoryButtons.addEventListener("change", (evt) => {
        const category = evt.currentTarget.value;
        showCategory(category);
      })

*/

