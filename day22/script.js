<!DOCTYPE html>
<html>
<head>
<style>
  .highlight { background-color: yellow; }
  .dark-mode { background-color: black; color: white; }
</style>
</head>
<body>

<p id="myPara">This is a paragraph.</p>
<h1 id="myHeading">This is a heading</h1>

<div id="testDiv">Original Div</div>

<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<button id="toggleBtn">Toggle Dark Mode</button>

<script>
  // 1. Change Text Color with style
  const para = document.getElementById("myPara");
  para.style.color = "red";

  // 2. Change Multiple Styles
  const heading = document.getElementById("myHeading");
  heading.style.fontSize = "28px";
  heading.style.backgroundColor = "lightblue";

  // 3. Add a Class
  heading.classList.add("highlight");

  // 4. Remove a Class
  heading.classList.remove("highlight");

  // 5. Toggle a Class on Click
  document.getElementById("toggleBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });

  // 6. Check if Element Has Class
  console.log(heading.classList.contains("active")); // outputs true/false

  // 7. Create and Append Element
  const newLi = document.createElement("li");
  newLi.textContent = "Item 4";
  document.getElementById("myList").appendChild(newLi);

  // 8. Append Using append()
  const newSpan = document.createElement("span");
  newSpan.textContent = " - Extra Info";
  para.append(newSpan);

  // 9. Remove a Specific Element (third item)
  const list = document.getElementById("myList");
  if (list.children[2]) { // check if it exists
    list.removeChild(list.children[2]);
  }

  // 10. Clone an Element
  const divClone = document.getElementById("testDiv").cloneNode(true);
  document.getElementById("testDiv").after(divClone);
</script>

</body>
</html>
