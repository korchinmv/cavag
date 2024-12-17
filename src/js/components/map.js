// var yaMapSite = function () {
//   ymaps.ready(init);
//   var myMap, placemark;

//   function init() {
//     // Создание карты.
//     myMap = new ymaps.Map("mapSite", {
//       center: [55.76, 37.64],
//       zoom: 3.5,
//       controls: [],
//     });
//     myMap.events.add("balloonopen", function (e) {
//       var balloon = e.get("balloon");
//       myMap.events.add("click", function (e) {
//         if (e.get("target") === myMap) {
//           // Если клик был на карте, а не на геообъекте
//           myMap.balloon.close();
//         }
//       });
//     });
//     myMap.behaviors.disable(["scrollZoom"]);
//     var body = document.getElementsByTagName("body")[0];
//     body.onkeydown = callbackDown;
//     body.onkeyup = callbackUp;

//     function callbackDown(e) {
//       if (e.keyCode === 17) {
//         myMap.behaviors.enable(["scrollZoom"]);
//       }
//     }

//     function callbackUp(e) {
//       if (e.keyCode === 17) {
//         myMap.behaviors.disable(["scrollZoom"]);
//       }
//     }

//     myMap.controls.add("zoomControl");
//     (MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
//       "<div class='balloon'>" +
//         "$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]" +
//         "<div class='balloon__triangle'></div>" +
//         "<div class='close'></div>" +
//         "</div>",
//       {
//         /**
//          * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
//          * @function
//          * @name build
//          */
//         build: function () {
//           this.constructor.superclass.build.call(this);
//           this._element = $(".balloon", this.getParentElement());
//           this.applyElementOffset();

//           this._element
//             .find(".close")
//             .on("click", $.proxy(this.onCloseClick, this));
//         },

//         /**
//          * Удаляет содержимое макета из DOM.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
//          * @function
//          * @name clear
//          */
//         clear: function () {
//           this._$element.find(".close").off("click");

//           this.constructor.superclass.clear.call(this);
//         },

//         /**
//          * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
//          * @function
//          * @name onSublayoutSizeChange
//          */
//         onSublayoutSizeChange: function () {
//           MyBalloonLayout.superclass.onSublayoutSizeChange.apply(
//             this,
//             arguments
//           );

//           if (!this._isElement(this._$element)) {
//             return;
//           }

//           this.applyElementOffset();
//           this.events.fire("shapechange");
//         },

//         /**
//          * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
//          * @function
//          * @name applyElementOffset
//          */
//         applyElementOffset: function () {
//           this._$element.css({
//             left: -(this._$element[0].offsetWidth / 2),
//             top: -(
//               this._$element[0].offsetHeight +
//               this._$element.find(".balloon__triangle")[0].offsetHeight
//             ),
//           });
//         },

//         /**
//          * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
//          * @function
//          * @name onCloseClick
//          */
//         onCloseClick: function (e) {
//           e.preventDefault();
//           this.events.fire("userclose");
//         },

//         /**
//          * Используется для автопозиционирования (balloonAutoPan).
//          * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
//          * @function
//          * @name getClientBounds
//          * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
//          */
//         getShape: function () {
//           if (!this._isElement(this._element)) {
//             return MyBalloonLayout.superclass.getShape.call(this);
//           }

//           var position = this._element.position();

//           let shapeSize = [
//             position.left + this._element[0].offsetWidth,
//             position.top +
//               this._element[0].offsetHeight +
//               this._element.find(".balloon__triangle")[0].offsetHeight,
//           ];

//           console.table(shapeSize);

//           //return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[position.left, position.top], shapeSize]));
//         },

//         /**
//          * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
//          * @function
//          * @private
//          * @name _isElement
//          * @param {jQuery} [element] Элемент.
//          * @returns {Boolean} Флаг наличия.
//          */
//         _isElement: function (element) {
//           return element && element[0] && element.find(".balloon__triangle")[0];
//         },
//       }
//     )),
//       (MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
//         "<div class='balloon__wrapper-img'>" +
//           "<img class='balloon__img' src='$[properties.balloonHeader]' alt=''>" +
//           "</div>" +
//           "<div class='balloon__content'>$[properties.balloonContent]</div>"
//       ));

//     var data = {
//       type: "FeatureCollection",
//       features: [],
//     };
//     arDataMaps.forEach(function (item, i, arDataMaps) {
//       data.features.push({
//         type: "Feature",
//         id: i,
//         geometry: {
//           type: "Point",
//           coordinates: [item.x, item.y],
//         },
//         properties: {
//           hintContent: item.name,
//           balloonHeader: item.img,
//           balloonContent:
//             "<span class='balloon__title'>" + item.name + "</span>" + item.text,
//         },
//         options: {
//           iconLayout: "default#image",
//           iconImageHref: "/_v/_img/ya-marker.png",
//           iconImageSize: [40, 40],
//           iconImageOffset: [-20, -20],
//           balloonShadow: false,
//           balloonLayout: MyBalloonLayout,
//           balloonContentLayout: MyBalloonContentLayout,
//           balloonPanelMaxMapArea: 0,
//           hideIconOnBalloonOpen: false,
//           balloonOffset: [0, 0],
//           balloonAutoPanMargin: [100, 250],
//         },
//       });
//     });

//     objectManager = new ymaps.ObjectManager();
//     myMap.geoObjects.add(objectManager);
//     objectManager.add(data);
//   }
// };

// if (".ya-map".length) {
//   yaMapSite();
// }
