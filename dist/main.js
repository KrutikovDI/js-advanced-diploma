/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// Точка входа webpack\n// Не пишите код в данном файле\n\n//# sourceURL=webpack://ja-advanced/./src/index.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes */ \"./src/js/themes.js\");\n\nclass GameController {\n  constructor(gamePlay, stateService) {\n    this.gamePlay = gamePlay;\n    this.stateService = stateService;\n  }\n  init() {\n    this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prairie);\n    console.log(\"Мы вызвали!!!!!!!!!\");\n    // TODO: add event listeners to gamePlay events\n    // TODO: load saved stated from stateService\n  }\n  onCellClick(index) {\n    // TODO: react to click\n  }\n  onCellEnter(index) {\n    // TODO: react to mouse enter\n  }\n  onCellLeave(index) {\n    // TODO: react to mouse leave\n  }\n}\n\n//# sourceURL=webpack://ja-advanced/./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GamePlay)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\nclass GamePlay {\n  constructor() {\n    this.boardSize = 8;\n    this.container = null;\n    this.boardEl = null;\n    this.cells = [];\n    this.cellClickListeners = [];\n    this.cellEnterListeners = [];\n    this.cellLeaveListeners = [];\n    this.newGameListeners = [];\n    this.saveGameListeners = [];\n    this.loadGameListeners = [];\n  }\n  bindToDOM(container) {\n    if (!(container instanceof HTMLElement)) {\n      throw new Error('container is not HTMLElement');\n    }\n    this.container = container;\n  }\n\n  /**\r\n   * Draws boardEl with specific theme\r\n   *\r\n   * @param theme\r\n   */\n  drawUi(theme) {\n    this.checkBinding();\n    console.log('Работает!!!!!!!!');\n    this.container.innerHTML = `\n      <div class=\"controls\">\n        <button data-id=\"action-restart\" class=\"btn\">New Game</button>\n        <button data-id=\"action-save\" class=\"btn\">Save Game</button>\n        <button data-id=\"action-load\" class=\"btn\">Load Game</button>\n      </div>\n      <div class=\"board-container\">\n        <div data-id=\"board\" class=\"board\"></div>\n      </div>\n    `;\n    this.newGameEl = this.container.querySelector('[data-id=action-restart]');\n    this.saveGameEl = this.container.querySelector('[data-id=action-save]');\n    this.loadGameEl = this.container.querySelector('[data-id=action-load]');\n    this.newGameEl.addEventListener('click', event => this.onNewGameClick(event));\n    this.saveGameEl.addEventListener('click', event => this.onSaveGameClick(event));\n    this.loadGameEl.addEventListener('click', event => this.onLoadGameClick(event));\n    this.boardEl = this.container.querySelector('[data-id=board]');\n    this.boardEl.classList.add(theme);\n    for (let i = 0; i < this.boardSize ** 2; i += 1) {\n      const cellEl = document.createElement('div');\n      cellEl.classList.add('cell', 'map-tile', `map-tile-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)}`);\n      cellEl.addEventListener('mouseenter', event => this.onCellEnter(event));\n      cellEl.addEventListener('mouseleave', event => this.onCellLeave(event));\n      cellEl.addEventListener('click', event => this.onCellClick(event));\n      this.boardEl.appendChild(cellEl);\n    }\n    this.cells = Array.from(this.boardEl.children);\n  }\n\n  /**\r\n   * Draws positions (with chars) on boardEl\r\n   *\r\n   * @param positions array of PositionedCharacter objects\r\n   */\n  redrawPositions(positions) {\n    for (const cell of this.cells) {\n      cell.innerHTML = '';\n    }\n    for (const position of positions) {\n      const cellEl = this.boardEl.children[position.position];\n      const charEl = document.createElement('div');\n      charEl.classList.add('character', position.character.type);\n      const healthEl = document.createElement('div');\n      healthEl.classList.add('health-level');\n      const healthIndicatorEl = document.createElement('div');\n      healthIndicatorEl.classList.add('health-level-indicator', `health-level-indicator-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)}`);\n      healthIndicatorEl.style.width = `${position.character.health}%`;\n      healthEl.appendChild(healthIndicatorEl);\n      charEl.appendChild(healthEl);\n      cellEl.appendChild(charEl);\n    }\n  }\n\n  /**\r\n   * Add listener to mouse enter for cell\r\n   *\r\n   * @param callback\r\n   */\n  addCellEnterListener(callback) {\n    this.cellEnterListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to mouse leave for cell\r\n   *\r\n   * @param callback\r\n   */\n  addCellLeaveListener(callback) {\n    this.cellLeaveListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to mouse click for cell\r\n   *\r\n   * @param callback\r\n   */\n  addCellClickListener(callback) {\n    this.cellClickListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to \"New Game\" button click\r\n   *\r\n   * @param callback\r\n   */\n  addNewGameListener(callback) {\n    this.newGameListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to \"Save Game\" button click\r\n   *\r\n   * @param callback\r\n   */\n  addSaveGameListener(callback) {\n    this.saveGameListeners.push(callback);\n  }\n\n  /**\r\n   * Add listener to \"Load Game\" button click\r\n   *\r\n   * @param callback\r\n   */\n  addLoadGameListener(callback) {\n    this.loadGameListeners.push(callback);\n  }\n  onCellEnter(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellEnterListeners.forEach(o => o.call(null, index));\n  }\n  onCellLeave(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellLeaveListeners.forEach(o => o.call(null, index));\n  }\n  onCellClick(event) {\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellClickListeners.forEach(o => o.call(null, index));\n  }\n  onNewGameClick(event) {\n    event.preventDefault();\n    this.newGameListeners.forEach(o => o.call(null));\n  }\n  onSaveGameClick(event) {\n    event.preventDefault();\n    this.saveGameListeners.forEach(o => o.call(null));\n  }\n  onLoadGameClick(event) {\n    event.preventDefault();\n    this.loadGameListeners.forEach(o => o.call(null));\n  }\n  static showError(message) {\n    alert(message);\n  }\n  static showMessage(message) {\n    alert(message);\n  }\n  selectCell(index, color = 'yellow') {\n    this.deselectCell(index);\n    this.cells[index].classList.add('selected', `selected-${color}`);\n  }\n  deselectCell(index) {\n    const cell = this.cells[index];\n    cell.classList.remove(...Array.from(cell.classList).filter(o => o.startsWith('selected')));\n  }\n  showCellTooltip(message, index) {\n    this.cells[index].title = message;\n  }\n  hideCellTooltip(index) {\n    this.cells[index].title = '';\n  }\n  showDamage(index, damage) {\n    return new Promise(resolve => {\n      const cell = this.cells[index];\n      const damageEl = document.createElement('span');\n      damageEl.textContent = damage;\n      damageEl.classList.add('damage');\n      cell.appendChild(damageEl);\n      damageEl.addEventListener('animationend', () => {\n        cell.removeChild(damageEl);\n        resolve();\n      });\n    });\n  }\n  setCursor(cursor) {\n    this.boardEl.style.cursor = cursor;\n  }\n  checkBinding() {\n    if (this.container === null) {\n      throw new Error('GamePlay not bind to DOM');\n    }\n  }\n}\n\n//# sourceURL=webpack://ja-advanced/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameStateService)\n/* harmony export */ });\nclass GameStateService {\n  constructor(storage) {\n    this.storage = storage;\n  }\n  save(state) {\n    this.storage.setItem('state', JSON.stringify(state));\n  }\n  load() {\n    try {\n      return JSON.parse(this.storage.getItem('state'));\n    } catch (e) {\n      throw new Error('Invalid state');\n    }\n  }\n}\n\n//# sourceURL=webpack://ja-advanced/./src/js/GameStateService.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/**\r\n * Entry point of app: don't change this\r\n */\n\n\n\nconst gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngamePlay.bindToDOM(document.querySelector('#game-container'));\nconst stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\nconst gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService);\ngameCtrl.init();\n\n// don't write your code here\n\n//# sourceURL=webpack://ja-advanced/./src/js/app.js?");

/***/ }),

/***/ "./src/js/themes.js":
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst themes = {\n  prairie: 'prairie',\n  desert: 'desert',\n  arctic: 'arctic',\n  mountain: 'mountain'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);\n\n//# sourceURL=webpack://ja-advanced/./src/js/themes.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHealthLevel: () => (/* binding */ calcHealthLevel),\n/* harmony export */   calcTileType: () => (/* binding */ calcTileType)\n/* harmony export */ });\n/**\r\n * @todo\r\n * @param index - индекс поля\r\n * @param boardSize - размер квадратного поля (в длину или ширину)\r\n * @returns строка - тип ячейки на поле:\r\n *\r\n * top-left\r\n * top-right\r\n * top\r\n * bottom-left\r\n * bottom-right\r\n * bottom\r\n * right\r\n * left\r\n * center\r\n *\r\n * @example\r\n * ```js\r\n * calcTileType(0, 8); // 'top-left'\r\n * calcTileType(1, 8); // 'top'\r\n * calcTileType(63, 8); // 'bottom-right'\r\n * calcTileType(7, 7); // 'left'\r\n * ```\r\n * */\nfunction calcTileType(index, boardSize) {\n  // TODO: ваш код будет тут\n  return 'center';\n}\nfunction calcHealthLevel(health) {\n  if (health < 15) {\n    return 'critical';\n  }\n  if (health < 50) {\n    return 'normal';\n  }\n  return 'high';\n}\n\n//# sourceURL=webpack://ja-advanced/./src/js/utils.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ja-advanced/./src/css/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;