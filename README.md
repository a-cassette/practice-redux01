# M E M O

As first step
Simply, click text, then show 'hello world'
When click agein hide 'hello world'

## **action**
---
	SHOW_MESSAGE
	HIDE_MESSAGE

## **state**
---

## **reducer**
---

## **store**
---

## **connect with React (components, container)**
---
### jsx
React's JSX uses upper vs.lower case convention to distinguish between local component classes and html tags as follow:
jsx renders both html tag and React compornents

```javascript
var myDiv = <div className="foo" />;
ReactDOM.render(myDiv, document.getElementById('example'));
```

```javascript
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```

components never connect to redux
containers connect to redux with functions such as _mapStateToProps()_, _dispatch()_ and then _connect()_.
