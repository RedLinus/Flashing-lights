# Flashing Lights

A jQuery plugin to add random blinking lights to a target container.

## Getting Started

Add the files to the project and inquery them

```
    <script src="jQuery-flashinglights.min.js"></script>
```

Once the files are inclided you can call the function

```
$(document).ready(function() {
    $(".targetContainer").flashingLights({
        //settings
    });
});
```

### customizing

To customize the lamps you have the following options:

```
    / Numbers of rows. Default 10.
    *rows
    / Numbers of columns. Default 10.
    *columns
    / Rounding of the lamps. Default 100%.
    *rounded
    / Height of the lamps. Default 2px.
    *lampHeight
    / Width of the lamps. Default 5.
    *lampWidth
    / How many of the lamps are turned on per cykle. default 0.1. 0-1 allowed.
    *onRatio
    / How many of the lamps are turned on per cykle. default 0.7. 0-1 allowed.
    *offRatio:
    / How often the lamps turn off and on in ms. Default 75
    *refreshRate
    / Colour of the lamps when turned on. Default black. CSS color codes allowed.
    *onColour
    / Colour of the lamps when turned off. Default black. CSS color codes allowed.
    *offColour: "none",
    / How dar the lamps blur spreads. Default 15. 
    *blurRadious: 15,
```

The customization is added to the function like this

```
$(document).ready(function() {
    $(".left").flashingLights({
        rows: 5,
        columns: 5,
        rounded: "100%",
        lampHeight: "10px",
        lampWidth: "10px",
        onColour: "green",
        offColour: "red",
    });
});
```

## Authors

* **Linus Johansson** - [RedLinus](https://github.com/RedLinus)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
