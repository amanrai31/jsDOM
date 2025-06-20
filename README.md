# Vanilla frontend and DOM

We can not directly run our local JS code in browser, we need to attach our JS to HTML and HTML connects JS to browser. 

Similarly in this repo => index.html connects script.js to browser.

**NOTE :** alert() and prompt() temporarily pause the execution until you do not response to that alert OR prompt.

**NOTE :** `console.log() || console.dir()`

### Where is JS in HTML

1. internal JS    ( in head (which is very bad => put js in head and try `document.body` returns null i.e. DOM elements will not be accessable), OR at the end of body ) 
2. external JS    ( standard way => because of modularity, readability, and cached JS which speeds up reload )

### Where is CSS in HTML

1. inline CSS           `style="color: blue; font-size: 20px;"`
2. internal CSS        ( in head of html =>  ```<style> CSS like you write in external CSS file </style>```)
3. external CSS        ( in head of html => ``` <link rel="stylesheet" href="style.css">```)

#### CSS Selectors have different prefixes also we access/get DOM element by these 3 references only. (KINDDA HTML IDENTIFIERS)

1. Class => start with a ```.``` => Targets element with that class
2. ID    => start with a ```#``` => Target element with that specific ID
3. Tag   => No prefix            => Applicable for all element with that Tag like ```<h1>```, ```<p>``` etc.

**NOTE :** Inside `inspect of browser` => `element section` is for HTML & CSS AND `console section` is for JS

### DOM

When browser loads a HTML page => It parses the `elements of HTML` into `object` so that JS can access & interact. => `window.document object`  

So DOM is API for HTML & XML documents provides a tree-like structure where each node is an object representing part of the page. ( INSHORT => DOM is Obj model of HTML documents).

Node type

- Document         =>  Document object itself   
- Attribute        =>  class="titles" => Addition info in our element like id,href,src,class etc.
- Text             =>  "Hello"
- Comment          =>  `<!--comment-->`
- Element          =>  Main => `e.g. <div>, <p>,<ul>`

-----

We can get element/node in 3 ways => `id`, `class`, `tagId`.

### Get element/node APIs

1. document.getElementById("exampleId") => gets an element by it's ID
2. document.getElementsByClassName("exampleClassName") => get element(s) by className => `returns HTMLCollections`
3. document.getElementsByTagName("exampleTagName") =>  get element(s) by TagName => `p, div, h1` => `returns HTMLCollections`
4. **document.querySelector("id/class/tagId")** => returns first element
5. **document.querySelectorAll("id/class/tagId")** => returns All element => make no sense if you want to get node by id cuz it is not multiple nodes

**NOTE :** `getElementByClassName, getElementByTagName` returns `HTMLCollection` which is similar to an array. `querySelectorAll` returns NodeList which is also similar to an array.

- `document.querySelector("#exampleID")` || `document.querySelector(".exampleClass")` || `document.querySelector("exampleTagId")`

## DOM manipulation

Now we got the element/node by it's ID,class or tagId whatever, we can now manipulate the DOM.

### Change the DOM

1. tagName: get/change tag for element nodes
2. innerText: get/change pure text content of the element and all its children
3. innerHTML: get/change plain text OR HTML contents of the element and all its children
4. textContent: returns textual content even for hidden elements.

#### Attribute 

- get attribute => `getAttribute(att)`   attribute example => class,src,href,id etc.
- set attribute => `setAttribute(att,value)`  => OverRides if you set existing att.

- `node.classList`, `node.classList.add(someOtherClass)` => this do not override this appends/add. `node.classList.remove(className)`

#### style

- `node.style` => style `let el = document.querySelector("#btn"); el.style.backgroundColor = "red"`

**NOTE :** Whatever style we add through JS will become inline CSS.

### Insert/add elements in DOM (2 step process)

- node.append(el)      => adds at the end of node(inside); syntax => `let el = document.createElement(tagName); ADD SOME STYLE; node.append(el);`

`let newBtn = document.createElement("button"); => newBtn.innerText ="click me"; => newBtn.append(someNode)`

- node.preappend(el)   => adds at the start of node (inside)
- node.before(el)      => adds before the node (outside)
- node.after(el)       => adds after the node (outside)
- appendChild(el)

### Delete element
s
- node.remove()   => `let para = document.querySelector("p"); para.remove();`
- removeChild(el) => `node.removeChild(el)`


```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Manipulation</title>
    <style>
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <h1 id="main-title">Welcome!</h1>
    <p class="intro">This is an example.</p>
    <button onclick="changeContent()">Click Me</button>

    <script>
      function changeContent() {
        // Change text using id
        document.getElementById("main-title").innerText = "Title Changed!";

        // Add class to paragraph using className 
        document.querySelector(".intro").classList.add("highlight");

        // Create a new element and add it to the body
        const newPara = document.createElement("p");
        newPara.innerText = "This is a new paragraph!";
        document.body.appendChild(newPara);
      }
    </script>
  </body>
</html>
```

- Question => Add a button with name "Click", background color should be red and append this button at the starting of body.

```html
let btn = document.createElement("button");
btn.innerText = "Click";
btn.style.backgroundColor = "red";

document.body.preAppend(btn);
```

- `console.dir(document.body);`, `console.dir(document.head);`, `console.dir(document.body.chileNodes[1]);`, `console.dir(document.body.style.background = "green");`

- `document.body.contentEditable = true; || document.title = "newTitle"`
