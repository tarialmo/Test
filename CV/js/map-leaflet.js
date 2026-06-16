/* global L:readonly */
//установка карты
const map = L.map('map')
  .setView({
    lat: 59.95830,
    lng: 30.31748,
  }, 13);

//наложение изображений
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

//пример кастомной иконки
const mainPinIcon = L.icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

//маркер
const marker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon : mainPinIcon, //кастомная иконка
  },
);

marker.on('moveend', (evt) => { //пользователь закончил передвигать маркер, и выведем в консоль новые координаты метки.
  console.log(evt.target.getLatLng());
});

mainPinMarker.remove(); //если требуется удаление

//МАССИВ МЕТОК
const points = [
  {
    title: 'Футура',
    lat: 59.96925,
    lng: 30.31730,
  },
  {
    title: 'Шаверма',
    lat: 59.96783,
    lng: 30.31258,
  },
  {
    title: 'Франк',
    lat: 59.95958,
    lng: 30.30228,
  },
  {
    title: 'Ginza',
    lat: 59.97292,
    lng: 30.31982,
  },
];

//функция createCustomPopup по получению DOM-элемента из разметки (блок template).
const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.balloon__title').textContent = point.title;
  popupElement.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return popupElement;
};

ИЛИ без template

const createCustomPopup = ({lat, lng, title}) => `<section class="balloon">
  <h3 class="balloon__title">${title}</h3>
  <p class="balloon__lat-lng">Координаты: ${lat}, ${lng}</p>
</section>`;

//
points.forEach((point) => {

const {lat,lng} = point;

//ШАБЛОН для кастомной иконки
  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

//ШАБЛОН для маркера
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

marker
    .addTo(map)
    .bindPopup(createCustomPopup(point),//привязка балуна
    {
        keepInView: true, keepInView, чтобы карта автоматичски переместилась, если балун вылезает за границы.
    },
);
});
