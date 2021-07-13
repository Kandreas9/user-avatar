# User Avatar Web Component
A simple and light web component for creating a user avatar.

[![CDN - jsDelivr][logo]][jsDelivr]

![Showcase Example][showcase]

## How to use?

- Copy the CDN link above in to the bottom of your body inside a script tag.

```html
<body>

    <script src="https://cdn.jsdelivr.net/gh/Kandreas9/user-avatar@main/dist/user-avatar.js"></script>
</body>
```

- You can now use the `<user-avatar></user-avatar>` tag

```html
<body>
    <user-avatar></user-avatar>

    <script src="https://cdn.jsdelivr.net/gh/Kandreas9/user-avatar@main/dist/user-avatar.js"></script>
</body>
```

- The web component sets out a custom event called `upload` whenever a user inputs a file which you can listen to and get the file to upload to a database

```js
document.querySelector('user-avatar').addEventListener('upload', (e) => {
    console.log(e.detail) //detail contains the inputed file
})
```

## Attributes

`size` - Default is 100 pixels, but you can add any number.

`src` - This attribute can be used to add a default image, before the user inputs their image. Without this attribute a default placeholder image will be placed

## Full Example

```html
<body>
    <user-avatar
        size='200'
        src='https://images.unsplash.com/photo-1615798763618-183906cd14b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80'
    ></user-avatar>

    <script src="https://cdn.jsdelivr.net/gh/Kandreas9/user-avatar@main/dist/user-avatar.js"></script>
</body>
```


[logo]: https://img.shields.io/static/v1?label=CDN&message=jsDelivr&color=%23ff5626&logo=jsDelivr&logoColor=%23ff5626
[jsDelivr]: https://cdn.jsdelivr.net/gh/Kandreas9/user-avatar@main/dist/user-avatar.js
[showcase]: https://raw.githubusercontent.com/Kandreas9/user-avatar/main/src/assets/showcase.png
