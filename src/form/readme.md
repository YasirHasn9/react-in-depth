there is 2 ways to associate label with input
```html
<label>
name:
  <input name="name">
</label>
```
or 
```html
<label htmlFor="whatever"> 
<!-- the id should be the same so they can link to each other -->
</label>
<input id="whatever">
```