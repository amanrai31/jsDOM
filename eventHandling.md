# Events

An event is a signal/notification that something has happened in the browser — either triggered by the user, the browser itself, or JS code. e.g. `click,input(form),onLoad,submit,scroll,keydown`

- How event work

1. The browser detects an interaction (like a click).

2. It creates an Event object.

3. It dispatches the event to the DOM tree.

4. Event listeners (functions) registered on elements get called.

5. JS can then handle or modify the default behavior.


### Event object

Event object has all details about event. e.g. type(click,keydown), target(el that the event happened on), event handler/listener(a f/n that runs in response to the event).

- All event handlers have access to event object's properties and methods. 
  
**Event handling in JS** => `node.event = () => {}; e.g. => node.onclick = () => {}` 

**NOTE :** We can handle event in HTML too, inline event handling. BUT JS event handling gets the priority if event handling overrides.

### Event listeners (event + event handler) => We can apply multiple event listener for the same element OR same event.

```html
<button id="myBtn">Click Me</button>

<script>
  const btn = document.getElementById("myBtn");

  // Adding an event listener
  btn.addEventListener("click", function(event) {
    alert("Button was clicked!");
    console.log(event);                           // event object
    console.log("Event type:", event.type);       // click
    console.log("Event target:", event.target);  // button
  });
</script>
```
