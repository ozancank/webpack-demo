const dateModule = () => import("./modules/dateModule");

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    dateModule().then(({ getCurrentDate }) => {
        document.getElementById('dateContainer').innerHTML = getCurrentDate();
    });
}).format('MMMM Do YYYY, h:mm:ss a');
