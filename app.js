var usernumber = document.getElementById
("getNumber")
usernumber.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e)
    };
})

function run() {
    document.getElementById("paragraph").innerHTML = "Hello world!";
    document.getElementById("paragraph").style.backgroundColor =
    "blue"
    document.getElementById("paragraph").style.color =
    "red"
    document.getElementById("paragraph").style.padding =
    "21px"
    randomNum();
}

function randomNum() {
        let ran = Math.floor(Math.random() * 10);
        document.getElementById("random").innerHTML = ran;
        document.getElementById("random").style.backgroundColor = "blue"
        document.getElementById("random").style.color = "pink"
        document.getElementById("random").style.padding = "21px"
        document.getElementById("random").style.textAlign = "center"
        return ran
}
function compare() {
    var u = userNum();
    var b = rn();
    var f = document.getElementById("compare")
    var g = document.getElementById("counter")

    z.style.color="brown"
    z.style.color="pink"
    z.style.padding="20px"
    z.style.textAlign="center"

    if (u != b) {
        z.innerHTML = `You got it wrong!!`
        counter++
        g.innerHTML = `You tried ${counter} times...`
        g.style.color="white"
        g.style.backgroundColor="yellow"
        g.style.padding="20px"
        g.style.textAlign="center"
        document.querySelector("body").style.backgroundColor="red"
    } else {

        z.innerHTML = `You got it right!!`
        document.querySelector("body").style.backgroundColor="lime"
    }
    reset()
}

function reset() {
    document.getElementById("getNumber").value = "";
}



