/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animated-scroll-jquery/index.js":
/*!*********************************************!*\
  !*** ./src/animated-scroll-jquery/index.js ***!
  \*********************************************/
/*! exports provided: animatedScroll, showSpanModelTrained */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animatedScroll\", function() { return animatedScroll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSpanModelTrained\", function() { return showSpanModelTrained; });\nfunction animatedScroll() {\n  $('a[href *= \\\\#]').click(function () {\n    if (location.pathname.replace(/^\\//, '') == this.pathname.replace(/^\\//, '') && location.hostname == this.hostname) {\n      var $target = $(this.hash);\n      $target = $target.length && $target || $(\"[name = '+this.hash.slice(1) + ']\");\n\n      if ($target.length) {\n        var targetOffset = $target.offset().top;\n        $('html, body').animate({\n          scrollTop: targetOffset - 80\n        }, 1000);\n      }\n    }\n  });\n}\nfunction showSpanModelTrained() {\n  var $train_model_span = $('#train-model').find('span');\n  $train_model_span.css('display', 'block');\n  setTimeout(function () {\n    $train_model_span.css('display', 'none');\n  }, 3000);\n}\n\n//# sourceURL=webpack:///./src/animated-scroll-jquery/index.js?");

/***/ }),

/***/ "./src/brain-network/index.js":
/*!************************************!*\
  !*** ./src/brain-network/index.js ***!
  \************************************/
/*! exports provided: sendFeaturesFunction, sendQualityFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendFeaturesFunction\", function() { return sendFeaturesFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendQualityFunction\", function() { return sendQualityFunction; });\nfunction sendFeaturesFunction(data) {\n  var network = new brain.NeuralNetwork();\n  var wineArray = [];\n  /*\r\n   *Para que no pregunte por la propiedad length de wineData cada vez que itera defini la constante length total\r\n   * de este array y la utilizo, asi se mejora el performance ya que son aproximadamente 1600 elementos.\r\n   */\n\n  var length = data.length;\n\n  for (var i = 1; i < length; i++) {\n    //Dividido en 10 para que no redondee los resultados y de un valor mas aproximado\n    // Por ejemplo si el resultado es  0.999 lo redondea a 1 (la mayoria)\n    wineArray.push({\n      input: {\n        fa: data[i].fixedAcidity / 10,\n        va: data[i].volatileAcidity / 10,\n        ca: data[i].citricAcid / 10,\n        rs: data[i].residualSugar / 10,\n        ch: data[i].chlorides / 10,\n        fsd: data[i].freeSulfurDioxide / 10,\n        tsd: data[i].totalSulfurDioxide / 10,\n        den: data[i].density / 10,\n        ph: data[i].pH / 10,\n        su: data[i].sulphates / 10,\n        al: data[i].alcohol / 10\n      },\n      output: {\n        quality: data[i].quality / 10\n      }\n    });\n  }\n\n  network.train(wineArray, {\n    log: true,\n    iterations: 1700\n  });\n  var result = network.run({\n    fa: document.querySelector('input[name=\"fa\"]').value,\n    va: document.querySelector('input[name=\"va\"]').value,\n    ca: document.querySelector('input[name=\"ca\"]').value,\n    rs: document.querySelector('input[name=\"rs\"]').value,\n    ch: document.querySelector('input[name=\"ch\"]').value,\n    fsd: document.querySelector('input[name=\"fsd\"]').value,\n    tsd: document.querySelector('input[name=\"tsd\"]').value,\n    den: document.querySelector('input[name=\"den\"]').value,\n    ph: document.querySelector('input[name=\"ph\"]').value,\n    su: document.querySelector('input[name=\"su\"]').value,\n    al: document.querySelector('input[name=\"al\"]').value\n  });\n  $('#send-features').find('span').css('display', 'block')[0].innerHTML = \"Calidad: \" + result.quality + \"%\";\n  console.log(result);\n}\nfunction sendQualityFunction(data) {\n  var network = new brain.NeuralNetwork();\n  var wineArray = [];\n  /*\r\n   *Para que no pregunte por la propiedad length de wineData cada vez que itera defini la constante length total\r\n   * de este array y la utilizo, asi se mejora el performance ya que son aproximadamente 1600 elementos.\r\n   */\n\n  var length = data.length;\n\n  for (var i = 1; i < length; i++) {\n    //Dividido en 10 para que no redondee los resultados y de un valor mas aproximado\n    // Por ejemplo si el resultado es  0.999 lo redondea a 1 (la mayoria)\n    wineArray.push({\n      output: {\n        fa: data[i].fixedAcidity / 10,\n        va: data[i].volatileAcidity / 10,\n        ca: data[i].citricAcid / 10,\n        rs: data[i].residualSugar / 10,\n        ch: data[i].chlorides / 10,\n        fsd: data[i].freeSulfurDioxide / 10,\n        tsd: data[i].totalSulfurDioxide / 10,\n        den: data[i].density / 10,\n        ph: data[i].pH / 10,\n        su: data[i].sulphates / 10,\n        al: data[i].alcohol / 10\n      },\n      input: {\n        quality: data[i].quality / 10\n      }\n    });\n  }\n\n  network.train(wineArray, {\n    log: true,\n    iterations: 1700\n  });\n  var result = network.run({\n    quality: document.querySelector('input[name=\"quality\"]').value\n  });\n  document.querySelector('input[name=\"fa_q\"]').value = result.fa;\n  document.querySelector('input[name=\"va_q\"]').value = result.va;\n  document.querySelector('input[name=\"ca_q\"]').value = result.ca;\n  document.querySelector('input[name=\"rs_q\"]').value = result.rs;\n  document.querySelector('input[name=\"ch_q\"]').value = result.ch;\n  document.querySelector('input[name=\"fsd_q\"]').value = result.fsd;\n  document.querySelector('input[name=\"tsd_q\"]').value = result.tsd;\n  document.querySelector('input[name=\"den_q\"]').value = result.den;\n  document.querySelector('input[name=\"ph_q\"]').value = result.ph;\n  document.querySelector('input[name=\"su_q\"]').value = result.su;\n  document.querySelector('input[name=\"al_q\"]').value = result.al;\n  console.log(result);\n}\n\n//# sourceURL=webpack:///./src/brain-network/index.js?");

/***/ }),

/***/ "./src/forms-send-data/index.js":
/*!**************************************!*\
  !*** ./src/forms-send-data/index.js ***!
  \**************************************/
/*! exports provided: send_features, send_quality, train_model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"send_features\", function() { return send_features; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"send_quality\", function() { return send_quality; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"train_model\", function() { return train_model; });\nvar send_features = document.getElementById('send-features');\nvar send_quality = document.getElementById('send-quality');\nvar train_model = document.getElementById('train-model');\n\n//# sourceURL=webpack:///./src/forms-send-data/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/index */ \"./src/services/index.js\");\n/* harmony import */ var _forms_send_data_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms-send-data/index */ \"./src/forms-send-data/index.js\");\n/* harmony import */ var _brain_network_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brain-network/index */ \"./src/brain-network/index.js\");\n/* harmony import */ var _animated_scroll_jquery_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animated-scroll-jquery/index */ \"./src/animated-scroll-jquery/index.js\");\n\n\n\n //Scroll\n\nObject(_animated_scroll_jquery_index__WEBPACK_IMPORTED_MODULE_3__[\"animatedScroll\"])(); //By features\n\n_forms_send_data_index__WEBPACK_IMPORTED_MODULE_1__[\"send_features\"].addEventListener('submit', function (e) {\n  e.preventDefault();\n  Object(_services_index__WEBPACK_IMPORTED_MODULE_0__[\"getData\"])(function (data) {\n    Object(_brain_network_index__WEBPACK_IMPORTED_MODULE_2__[\"sendFeaturesFunction\"])(data);\n  });\n}); //By quality\n\n_forms_send_data_index__WEBPACK_IMPORTED_MODULE_1__[\"send_quality\"].addEventListener('submit', function (e) {\n  e.preventDefault();\n  Object(_services_index__WEBPACK_IMPORTED_MODULE_0__[\"getData\"])(function (data) {\n    Object(_brain_network_index__WEBPACK_IMPORTED_MODULE_2__[\"sendQualityFunction\"])(data);\n  });\n}); //Train model\n\n_forms_send_data_index__WEBPACK_IMPORTED_MODULE_1__[\"train_model\"].addEventListener('submit', function (e) {\n  e.preventDefault();\n  Object(_services_index__WEBPACK_IMPORTED_MODULE_0__[\"trainData\"])();\n  Object(_animated_scroll_jquery_index__WEBPACK_IMPORTED_MODULE_3__[\"showSpanModelTrained\"])(); // span model trained\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: getData, trainData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getData\", function() { return getData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trainData\", function() { return trainData; });\nfunction getData(fn) {\n  return fetch('http://localhost:3333/get-data').then(function (data) {\n    return data.json();\n  }).then(function (processed_data) {\n    fn(processed_data.data);\n  })[\"catch\"](function (error) {\n    return console.log(error);\n  });\n}\nfunction trainData() {\n  var wine = {\n    fixedAcidity: document.querySelector('input[name=\"fa_train\"]').value,\n    volatileAcidity: document.querySelector('input[name=\"va_train\"]').value,\n    citricAcid: document.querySelector('input[name=\"ca_train\"]').value,\n    residualSugar: document.querySelector('input[name=\"rs_train\"]').value,\n    chlorides: document.querySelector('input[name=\"ch_train\"]').value,\n    freeSulfurDioxide: document.querySelector('input[name=\"fsd_train\"]').value,\n    totalSulfurDioxide: document.querySelector('input[name=\"tsd_train\"]').value,\n    density: document.querySelector('input[name=\"den_train\"]').value,\n    pH: document.querySelector('input[name=\"ph_train\"]').value,\n    sulphates: document.querySelector('input[name=\"su_train\"]').value,\n    alcohol: document.querySelector('input[name=\"al_train\"]').value,\n    quality: document.querySelector('input[name=\"ql_train\"]').value\n  };\n  return fetch('http://localhost:3333/create-data', {\n    method: 'POST',\n    body: JSON.stringify(wine),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (data) {\n    return data.json();\n  }).then(function (dataUpdated) {\n    console.log(dataUpdated.data);\n  })[\"catch\"](function (error) {\n    return console.log(error);\n  });\n}\n\n//# sourceURL=webpack:///./src/services/index.js?");

/***/ })

/******/ });