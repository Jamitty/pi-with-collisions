const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')

var x1 = 120
var x2 = 0


const block1Width = block1.offsetWidth
const block2Width = block2.offsetWidth
var block1X = block1.offsetLeft
var block2X = block2.offsetLeft
const wall = document.documentElement.offsetLeft
const m1 = 100
const m2 = 1
var v1 = 1
var v2 = 0
const sumM = m1 + m2
var count = 0;

function animation() {
    setInterval(move, 1)
    
    function move(){
        var block1X = block1.offsetLeft
        var block2X = block2.offsetLeft

        if (block1X <= (block2X + block2Width)){
            newV1 = (v1*(m1-m2)+2*v2*m2) / sumM
            newV2 = (v2*(m2-m1)+2*v1*m1) / sumM
            v1 = newV1
            v2 = newV2
            count++
            console.log(count)
        } else if (block2X <= wall){
            v2 = -v2
            count++
            console.log(count)
        }
        x2 -= v2
        x1 -= v1
        document.documentElement.style.setProperty('--v2', x2 + 'px')
        document.documentElement.style.setProperty('--v1', x1 + 'px')
    };
}

