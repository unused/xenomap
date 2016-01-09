
# Interactive Map for Xenoblade Chronicles X

Is an interactive map in first place to find location of enemies while troopmissions, where time is limited.

## Development Notes

Map used references to [wikia](http://xenoblade.wikia.com/wiki/Mira).
Created map controls using [Leaflet][leafletjs] - an open-source JavaScript library for mobile-friendly interactive maps.

Created map tiles using rubygem [tileup][tileup].  Generate tiles with:

```sh
$ tileup --in map.png --output-dir map --prefix map
```

## TODO

- [ ] use zoom (check tutorial by Oliver Marriott](http://omarriott.com/aux/leaflet-js-non-geographical-imagery/)).
- [ ] create interface to choose data.
- [ ] extend the data: troopmission targets, enemies, tyrants, treasures, etc.

[leafletjs]: http://leafletjs.com/examples/quick-start.html "Leaflet"
[tileup]: https://github.com/rktjmp/tileup/tree/master "Rubygem tileup"
[miramap]: http://xenoblade.wikia.com/wiki/Mira "Wikia World Map of Mira"
