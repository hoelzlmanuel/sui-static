## SUI
*a start page for your new tab page*

![screenshot](https://i.imgur.com/J4d7Q3D.png)

[More screenshots](https://imgur.com/a/FDVRIyw)

### How do I use this?

Just clone it and set index.html as your new tab page.

### And how do I change the Apps and Bookmarks?

Go to `assets/js/data.js` and edit the dictionary called `data`.

Please note that you don't need `http://` in the URL. You can find the names of icons to use at [Material Design Icons](https://materialdesignicons.com/).

### How do I customize the color themes?

Click the options button on the left bottom to select predefined ones.

If you want to add or customize color themes, you can do so in the `assets/js/themer.js` file. When changing the name of a theme or adding one, make sure to edit this section in index.html accordingly:

```
<div id="modal-theme">
```

You might want to add/update the according theme under `/* THEMING */` in `assets/css/styles.css`. This is only used to style the theme selection buttons.