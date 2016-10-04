# M E M O

As first step
Simply, click text, then show 'hello world'
When click agein hide 'hello world'

## action
	SHOW_MESSAGE
	HIDE_MESSAGE

## state

## reducer

## store

## connect with React (components, container)
### jsx
React's JSX uses upper vs.lower case convention to distinguish between local component classes and html tags as follow:
jsx renders both html tag and React compornents
```var myDiv = <div className="foo" />;
ReactDOM.render(myDiv, document.getElementById('example'));
```

```var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
ReactDOM.render(myElement, document.getElementById('example'));
```
