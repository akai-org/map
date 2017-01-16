define([], function() {
  'use strict';

  var MapCtrl = (function() {

    function MapCtrl($scope) {
      this.$scope = $scope;

      this.$scope.closeBuildingPanel = angular.bind(this, this.closeBuildingPanel);

      this.initializeMap();

      // $scope.$on('leafletDirectiveMap.map.click', angular.bind(this, this.clickMapListener));
      $scope.$on('leafletDirectiveGeoJson.map.click', angular.bind(this, this.buildingClickListener));
    }

    MapCtrl.prototype.initializeMap = function () {
      this.$scope.center = {
        lat: 52.40257,
        lng: 16.94933,
        zoom: 17
      };

      this.$scope.markers = [];

      this.$scope.events = {
        map: {
          enable: ['click'],
          logic: 'emit'
        }
      };

      this.$scope.buildings = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            id: 1,
            properties: {
              name: "Biblioteka Techniczna",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.948342323303223, 52.4034170954373],
                [16.949329376220703, 52.40303744665669],
                [16.949731707572937, 52.40343345953541],
                [16.949704885482788, 52.403750921838146],
                [16.948953866958615, 52.4040323813507],
                [16.948342323303223, 52.4034170954373]
              ]]
            }
          },
          {
            type: "Feature",
            id: 2,
            properties: {
              name: "Centrum Wykładowe",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.949517130851746, 52.40459856772159],
                [16.95037007331848, 52.404088018483634],
                [16.95015013217926, 52.40384583280469],
                [16.950101852416992, 52.40384910559299],
                [16.950091123580933, 52.40385237838104],
                [16.950048208236694, 52.40384910559299],
                [16.949973106384277, 52.403855651168854],
                [16.94991409778595, 52.403832741649005],
                [16.949855089187622, 52.403822923279726],
                [16.949806809425354, 52.40380001374288],
                [16.949763894081116, 52.40378037698754],
                [16.949710249900818, 52.40375419463349],
                [16.948964595794678, 52.40404219967339],
                [16.948975324630737, 52.40404547244711],
                [16.949517130851746, 52.40459856772159]
              ]]
            }
          },
          {
            type: "Feature",
            id: 3,
            properties: {
              name: "Jakieś coś",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.950809955596924, 52.403093085044354],
                [16.951249837875366, 52.40352509837279],
                [16.95286989212036, 52.402896713951165],
                [16.952451467514038, 52.402445057119834],
                [16.950809955596924, 52.403093085044354]
              ]]
            }
          },
          {
            type: "Feature",
            id: 4,
            properties: {
              name: "Hala sportowa",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.947596669197083, 52.40327636394278],
                [16.94868564605713, 52.402998172458446],
                [16.94804728031158, 52.402085037493315],
                [16.946969032287598, 52.402366507633694],
                [16.947596669197083, 52.40327636394278]
              ]]
            }
          },
          {
            type: "Feature",
            id: 5,
            properties: {
              name: "Wydział maszyn roboczych i transportu",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.949994564056396, 52.40192139123742],
                [16.950826048851013, 52.40275270792731],
                [16.951029896736145, 52.402683977613854],
                [16.950777769088745, 52.40243196554851],
                [16.950804591178894, 52.40242869265507],
                [16.950767040252686, 52.40235668893809],
                [16.9506973028183, 52.40237305342954],
                [16.950708031654358, 52.40235668893809],
                [16.95088505744934, 52.4022912309116],
                [16.950997710227966, 52.40238941791492],
                [16.95113718509674, 52.40234687024031],
                [16.951056718826294, 52.40225850186193],
                [16.951110363006592, 52.4022323186047],
                [16.95119619369507, 52.40232723283819],
                [16.951346397399902, 52.402261774767986],
                [16.951029896736145, 52.40194102882016],
                [16.95069193840027, 52.40207849165474],
                [16.950836777687073, 52.402238864420454],
                [16.95065438747406, 52.402297776718626],
                [16.9501930475235, 52.401852659628915],
                [16.949994564056396, 52.40192139123742]
              ]]
            }
          },
          {
            type: "Feature",
            id: 6,
            properties: {
              name: "Wydział elektryczny",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.95084750652313, 52.401597369859964],
                [16.95168972015381, 52.40241887397332],
                [16.95188820362091, 52.40235341603906],
                [16.951029896736145, 52.40152536478626],
                [16.95084750652313, 52.401597369859964]
              ]]
            }
          },
          {
            type: "Feature",
            id: 7,
            properties: {
              name: "Wydział budownictwa i inżynierii środowiska",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.94942057132721, 52.4007234821608],
                [16.950058937072754, 52.401397719139545],
                [16.95062756538391, 52.40122097840367],
                [16.950509548187256, 52.40108351289742],
                [16.95042371749878, 52.40111296982765],
                [16.950010657310486, 52.40068420590271],
                [16.950080394744873, 52.40065802171123],
                [16.949973106384277, 52.40053364658951],
                [16.94942057132721, 52.4007234821608]
              ]]
            }
          },
          {
            type: "Feature",
            id: 8,
            properties: {
              name: "Wydział technologii chemicznej",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.94986045360565, 52.40488656724926],
                [16.95043981075287, 52.40548546933777],
                [16.95066511631012, 52.405406925264806],
                [16.950579285621643, 52.40530219961664],
                [16.951072812080383, 52.40513856529368],
                [16.95115327835083, 52.405240018645436],
                [16.95139467716217, 52.40515492875331],
                [16.950745582580566, 52.40445456725269],
                [16.950514912605282, 52.40454293123251],
                [16.95065438747406, 52.404713113213454],
                [16.95012867450714, 52.40484074926835],
                [16.950058937072754, 52.40477529492736],
                [16.94986045360565, 52.40488656724926]
              ]]
            }
          },
          {
            type: "Feature",
            id: 9,
            properties: {
              name: "Coś z 6",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.950826048851013, 52.40130280290646],
                [16.950992345809937, 52.40125043524215],
                [16.95090651512146, 52.40115879168008],
                [16.950724124908447, 52.40121443243688],
                [16.950826048851013, 52.40130280290646]
              ]]
            }
          },
          {
            type: "Feature",
            id: 10,
            properties: {
              name: "DS4",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.9503915309906, 52.40039617894181],
                [16.95115327835083, 52.40115879168008],
                [16.951330304145813, 52.40109660486883],
                [16.95119619369507, 52.40094277395921],
                [16.951244473457336, 52.400932954946754],
                [16.951217651367188, 52.40090022488951],
                [16.9511479139328, 52.400916589921174],
                [16.950568556785583, 52.400320898858],
                [16.9503915309906, 52.40039617894181]
              ]]
            }
          },
          {
            type: "Feature",
            id: 11,
            properties: {
              name: "DS3",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.95111572742462, 52.400140880745504],
                [16.95187747478485, 52.400890405867585],
                [16.952049136161804, 52.400834764702175],
                [16.951915025711056, 52.40069075194814],
                [16.951963305473328, 52.40067438683271],
                [16.95194184780121, 52.40064165658367],
                [16.95187211036682, 52.400667840784834],
                [16.951276659965515, 52.400075419431616],
                [16.95111572742462, 52.400140880745504]
              ]]
            }
          },
          {
            type: "Feature",
            id: 12,
            properties: {
              name: "DS1",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.951823830604553, 52.39988230798974],
                [16.95262312889099, 52.40063511053093],
                [16.952794790267944, 52.40056964995025],
                [16.95263922214508, 52.40043545545628],
                [16.952703595161438, 52.40041254416041],
                [16.95267140865326, 52.4003863598077],
                [16.952601671218872, 52.400409271117184],
                [16.951995491981503, 52.399813573204774],
                [16.951823830604553, 52.39988230798974]
              ]]
            }
          },
          {
            type: "Feature",
            id: 13,
            properties: {
              name: "Proporcja",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.952000856399536, 52.40052055445103],
                [16.952054500579834, 52.40050746230868],
                [16.952242255210873, 52.40067438683271],
                [16.952161788940426, 52.40070711705751],
                [16.952301263809204, 52.400854402768566],
                [16.95264995098114, 52.4007234821608],
                [16.95243537425995, 52.400504189272475],
                [16.952478289604187, 52.40049764319935],
                [16.952354907989502, 52.400360175439495],
                [16.952215433120728, 52.40042236328867],
                [16.95215106010437, 52.40037981371712],
                [16.951952576637268, 52.4004681858583],
                [16.952000856399536, 52.40052055445103]
              ]]
            }
          },
          {
            type: "Feature",
            id: 14,
            properties: {
              name: "Centrum Mechatroniki, Biomechaniki i Nanoinżynierii",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.95343315601349, 52.40209812916759],
                [16.953331232070923, 52.40214067708209],
                [16.953599452972412, 52.40298508105129],
                [16.953701376914978, 52.40293598823974],
                [16.953958868980408, 52.40290653252659],
                [16.95392668247223, 52.402742889317665],
                [16.95393204689026, 52.40250069625455],
                [16.953738927841187, 52.40214722291143],
                [16.95367991924286, 52.40199339566478],
                [16.95342779159546, 52.40202612491114],
                [16.95343315601349, 52.40209812916759]
              ]]
            }
          },
          {
            type: "Feature",
            id: 15,
            properties: {
              name: "Cokolwiek",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.952703595161438, 52.40238614501835],
                [16.95317029953003, 52.40282798386205],
                [16.953331232070923, 52.40276907227187],
                [16.9533097743988, 52.40273307070581],
                [16.95343315601349, 52.402680704739126],
                [16.953009366989136, 52.40226504767379],
                [16.952703595161438, 52.40238614501835]
              ]]
            }
          },
          {
            type: "Feature",
            id: 16,
            properties: {
              name: "Cokolwiek2",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.95211887359619, 52.402049035369096],
                [16.952285170555115, 52.402225772787965],
                [16.952741146087646, 52.40205230829073],
                [16.95256948471069, 52.401878843111454],
                [16.95211887359619, 52.402049035369096]
              ]]
            }
          },
          {
            type: "Feature",
            id: 17,
            properties: {
              name: "Cokolwiek3 asdsadasasdasd",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.952210068702698, 52.40166282891591],
                [16.952295899391174, 52.40163664530519],
                [16.952011585235596, 52.40136826239941],
                [16.951603889465332, 52.40151227294207],
                [16.951780915260315, 52.401718469037085],
                [16.95194184780121, 52.4016595559654],
                [16.951856017112732, 52.401554821421534],
                [16.951957941055298, 52.401522091825576],
                [16.952086687088013, 52.40164319120933],
                [16.95215106010437, 52.40161700758695],
                [16.952210068702698, 52.40166282891591]
              ]]
            }
          },
          {
            type: "Feature",
            id: 18,
            properties: {
              name: "Cokolwi adjhaduia hdsaua asdsadasasdasd",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.952065229415894, 52.40121443243688],
                [16.952784061431885, 52.401931210029886],
                [16.953089833259583, 52.401819930253914],
                [16.952800154685974, 52.401522091825576],
                [16.952730417251587, 52.40154827550429],
                [16.952590942382812, 52.40141408398669],
                [16.952655315399166, 52.40138790022836],
                [16.95236027240753, 52.40109987786107],
                [16.952065229415894, 52.40121443243688]
              ]]
            }
          },
          {
            type: "Feature",
            id: 19,
            properties: {
              name: "Zbokole - DS2",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.95266604423523, 52.401001687987986],
                [16.953325867652893, 52.40181011143667],
                [16.953502893447876, 52.4017610173177],
                [16.95338487625122, 52.401610461678914],
                [16.95344388484955, 52.401594096904624],
                [16.9534170627594, 52.401564640295575],
                [16.953347325325012, 52.40158427803712],
                [16.952848434448242, 52.40095259296945],
                [16.95266604423523, 52.401001687987986]
              ]]
            }
          },
          {
            type: "Feature",
            id: 20,
            properties: {
              name: "Telekomunikacja? lub inne pierdy",
              show: false
            },
            geometry: {
              type: "Polygon",
              coordinates: [[
                [16.95491909980774, 52.4003045336054],
                [16.95514440536499, 52.400409271117184],
                [16.95518732070923, 52.40036344848636],
                [16.95563793182373, 52.400307806656414],
                [16.955713033676147, 52.400664567760536],
                [16.955959796905518, 52.40062856447725],
                [16.955857872962948, 52.40010160396883],
                [16.95564866065979, 52.400140880745504],
                [16.955552101135254, 52.40011796929669],
                [16.955482363700867, 52.400167065243885],
                [16.95491909980774, 52.40025871086583],
                [16.95491909980774, 52.4003045336054]
              ]]
            }
          }
        ]
      };

      this.$scope.geojson = {
        data: this.$scope.buildings,
        // filter: function (feature) {
        //   return feature.properties.show;
        // },
        style: angular.bind(this, this.getStyle)
      };
    };

    //example how add to map eventListener
    MapCtrl.prototype.clickMapListener = function(event, args) {
      var marker = {};
      marker.lat = args.leafletEvent.latlng.lat;
      marker.lng = args.leafletEvent.latlng.lng;
      this.$scope.markers.push(marker);
      for (var i=0; i<this.$scope.markers.length; i++) {
        console.log('[' + this.$scope.markers[i].lng + ', ' + this.$scope.markers[i].lat + "],");
      }
    };

    MapCtrl.prototype.buildingClickListener = function(event, args) {
      this.buildingClick(args.leafletObject.feature, args.leafletEvent);
      this.showBuildingDetails(args.leafletObject.feature);
      this.centerMap(args.leafletEvent.latlng);
    };

    MapCtrl.prototype.buildingClick = function(feature, leafletEvent) {
      this.$scope.geojson.data.features = this.$scope.geojson.data.features.map(function(b) {
        if (b.id === feature.id) {
          b.properties.show = true;
        } else {
          b.properties.show = false;
        }
        return b;
      });
    };

    MapCtrl.prototype.getStyle = function(feature) {
      if (feature.properties.show) {
        return {
            fillColor: 'blue',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
      } else {
        return {
            opacity: 0,
            fillOpacity: 0
        };
      }
    };

    MapCtrl.prototype.showBuildingDetails = function(feature) {
      this.$scope.selected = {
        building: feature
      };
      angular.element('#building-details').addClass('show');
    };

    MapCtrl.prototype.closeBuildingPanel = function() {
      angular.element('#building-details').removeClass('show');
      this.$scope.selected.building = null;
    };

    MapCtrl.prototype.centerMap = function(position) {
      this.$scope.center = {
        lat: position.lat,
        lng: position.lng,
        zoom: 17
      };
    };

    return MapCtrl;
  })();

  return MapCtrl;
});
