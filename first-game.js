/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: First Game
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p";
const wall = "w";
const goal = "g";



setLegend(
	[ player, bitmap`
        ................
        ................
        ................
        ................
        ................
        ......777.......
        .....7777777....
        ....777777777...
        ...7770770777...
        ...77777777777..
        ..777770077777..
        ..77777777777...
        ...777777777....
        ................
        ................
        ................` ],
    [ wall, bitmap`
        CCCCC2CCCCC2CCCC
        CCCCC2CCCCC2CCCC
        CCCCC2CCCCC2CCCC
        2222222222222222
        CC2CCCCC2CCCCC2C
        CC2CCCCC2CCCCC2C
        CC2CCCCC2CCCCC2C
        2222222222222222
        CCCCC2CCCCC2CCCC
        CCCCC2CCCCC2CCCC
        CCCCC2CCCCC2CCCC
        2222222222222222
        CC2CCCCC2CCCCC2C
        CC2CCCCC2CCCCC2C
        CC2CCCCC2CCCCC2C
        2222222222222222`],
    [ goal, bitmap`
        ................
        ....66666666....
        ...6666666666...
        ..666666666666..
        .666666FF666666.
        .666666FF666666.
        .666666FF666666.
        .666666FF666666.
        .666666FF666666.
        .666666FF666666.
        .666666FF666666.
        .666666FF666666.
        ..666666666666..
        ...6666666666...
        ....66666666....
        ................`]
);

setSolids([ player, wall ])

let level = 0
const levels = [
    map`
........
......g.
........
........
........
........
p.......
........`,
    map`
...wwwww
...w..g.
...w.www
...w.w..
...w.w..
wwww.w..
.p...w..
wwwwww..`,
    map`
.wgw.w.w
.w.w.w.w
ww.www.w
........
wwww.www
...w.w..
wwww.w..
p....w..`,
    map`
w..gw.w.
w.www.ww
w.......
w...wwww
w.w.w...
w.w.w...
wpw.w...
w.w.w...`,
    map`
wwwwwwww
........
.www.www
.wgwgwgw
.www.www
........
.www.www
pwgw.wgw`
  ]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("s", () => {
  getFirst(player).y += 1
})

onInput("w", () => {
    getFirst(player).y -= 1
})
onInput("a", () => {
    getFirst(player).x -= 1
})
onInput("d", () => {
    getFirst(player).x += 1
})
onInput("j", () => {
    setMap(levels[level])
});


afterInput(() => {
  const goalsCovered = tilesWith(player, goal)

  if (goalsCovered.length >= 1) {

    if (level <= levels.length) {
        level = level + 1

        setMap(levels[level])
    } else {
        addText("you win!", { y: 4, color: color`7` });
    }
  }
})