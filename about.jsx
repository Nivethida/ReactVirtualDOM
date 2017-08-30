var targetSnow = document.getElementById("snow");

var countSnow = 0;

function countsnow() {
    ReactDOM.render(
        <div>
        <p>Counter: {countSnow++}</p>
            <p>IT</p>
        </div>
        ,
        targetSnow
    )
}
setInterval(countsnow,1000)