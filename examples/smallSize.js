webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(171);


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	__webpack_require__(3);
	
	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(161);
	var Steps = __webpack_require__(162);
	
	var container = document.getElementById('__react-content');
	
	var steps = [{
	  status: 'finish',
	  title: '已完成'
	}, {
	  status: 'process',
	  title: '进行中'
	}, {
	  status: 'wait',
	  title: '待运行'
	}, {
	  status: 'wait',
	  title: '待运行'
	}].map(function (s, i) {
	  return React.createElement(Steps.Step, {
	    key: i,
	    status: s.status,
	    title: s.title
	  });
	});
	
	ReactDOM.render(React.createElement(
	  Steps,
	  { size: 'small' },
	  steps
	), container);

/***/ }

});
//# sourceMappingURL=smallSize.js.map