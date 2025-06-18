# Vanilla frontend and DOM

We can not directly run our local JS code in browser, we need to attach our JS to HTML and HTML connects JS to browser. 

Similarly in this repo => index.html connects script.js to browser.

**NOTE :** alert() and prompt() temporarily pause the execution until you do not response to that alert OR prompt.

### Where is JS in HTML

1. internal JS    ( in head (which is very bad), OR at the end of body )
2. external JS    ( standard way => because of modularity, readability, and cached JS which speeds up reload )

### Where is CSS in HTML

1. inline CSS
2. internal CSS        ( in head of html =>  ```<style> CSS like you write in external CSS file </style>```)
3. external CSS        ( in head of html => ``` <link rel="stylesheet" href="styles.css">```)

#### CSS Selectors have different prefixes also we access/get DOM element by these 3 references only. 

1. Class => start with a ```.``` => Targets element with that class
2. ID    => start with a ```#``` => Target element with that specific ID
3. Tag   => No prefix            => Applicable for all element with that Tag like ```<h1>```, ```<p>``` etc.

**NOTE :** Inside `inspect of browser` => `element section` is for HTML & CSS AND `console section` is for JS

### DOM

When browser loads a HTML page => It parses the `elements of HTML` into `object` so that JS can access & make changes(manipulate) and save this in window.document object.






















```
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
        // Change text
        document.getElementById("main-title").innerText = "Title Changed!";

        // Add class to paragraph
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