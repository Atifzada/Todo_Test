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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n// import './style.css';\n\n\n// ADD A NEW TASK\nconst addButton = document.querySelector('.addBtn'); // clicking add button\naddButton.addEventListener('click', () => {\n  const addTask = document.querySelector('.addInput');\n  add(addTask);\n});\n\nconst addTask = document.querySelector('.addInput'); // typing enter key\naddTask.addEventListener('keydown', (event) => {\n  if (event.keyCode === 13) {\n    const addTask = document.querySelector('.addInput').value;\n    add(addTask);\n    (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.render)();\n  }\n});\n\n// DELETE A TASK\nconst todoContainer = document.querySelector('.todoContainer');\n\ntodoContainer.addEventListener('click', (event) => {\n  const deleteTaskIcon = event.target.closest('.delete-task-icon');\n  if (deleteTaskIcon) {\n    const deleteTaskIcons = todoContainer.querySelectorAll('.delete-task-icon');\n    const index = Array.from(deleteTaskIcons).indexOf(deleteTaskIcon);\n    remove(index);\n  }\n});\n\n// EDIT A TASK\ntodoContainer.addEventListener('click', (event) => {\n  const textInput = event.target.closest('.input-text');\n  if (textInput) {\n    const textInputs = todoContainer.querySelectorAll('.input-text');\n    const index = Array.from(textInputs).indexOf(textInput);\n    (0,_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.edit)(index);\n  }\n});\n\n// FIRST RENDER WHEN THE PAGE LOADS\nwindow.onload = _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.render;\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"edit\": () => (/* binding */ edit),\n/* harmony export */   \"removeTodo\": () => (/* binding */ removeTodo),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n// RENDER\nconst render = () => {\n  const todoContainer = document.querySelector('.todoContainer');\n  const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];\n  todoArray.sort((a, b) => a.index - b.index);\n  todoContainer.innerHTML = '';\n  for (let i = 0; i < todoArray.length; i += 1) {\n    const html = `\n      <div class=\"task\">\n        <input type=\"checkbox\" class=\"Input-checkbox\">\n        <input type=\"text\" class=\"input-text\" value=\"${todoArray[i].description}\">\n        <div class=\"delete-task-icon\">&#x1F5D1;</div>\n        <!-- <div class=\"drag-to-order\">&#x22EE;</div> -->\n      </div>\n      \n    `;\n    todoContainer.innerHTML += html;\n  }\n};\n\n// ADD A NEW TASK\nconst addTodo = (addTask) => {\n  const addTaskInput = document.querySelector('.addInput');\n  if (addTask !== '') {\n    const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];\n    todoArray.push({ completed: false, description: addTask });\n    for (let i = 1; i <= todoArray.length; i += 1) {\n      todoArray[i - 1].index = i;\n    }\n    localStorage.setItem('todoArray', JSON.stringify(todoArray));\n  }\n  addTaskInput.value = '';\n  render();\n};\n\n// DELETE A TASK\nconst removeTodo = (index) => {\n  const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];\n  todoArray.splice(index, 1);\n  for (let i = 1; i <= todoArray.length; i += 1) {\n    todoArray[i - 1].index = i;\n  }\n  localStorage.setItem('todoArray', JSON.stringify(todoArray));\n  render();\n};\n\n// EDIT A TASK\nconst edit = (index) => {\n  const todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];\n  const textInputs = document.querySelectorAll('.input-text');\n  textInputs[index].addEventListener('change', () => {\n    todoArray[index].description = textInputs[index].value;\n    localStorage.setItem('todoArray', JSON.stringify(todoArray));\n  });\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/functions.js?");

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