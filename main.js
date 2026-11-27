

const init = () => {

    header(); // load site header

    document.getElementById("viewGarage").addEventListener("click", viewGarage);

    let newCar = document.getElementById("addCar");
    newCar.addEventListener("click", addCar);

    let addRecords = document.getElementById("updateRecords");
    addRecords.addEventListener("click", updateRecords)

    let myRecords = document.getElementById("viewRecords");
    myRecords.addEventListener("click", viewRecords)

    garage.print()

}

window.onload = init;



/*
class Job {
    constructor(jobName, date) {
        this.jobName = jobName;
        this.date = date
    }

    recentWork = () => {
        console.log(`${this.jobName} ${this.date}`);
}


}   
*/  

/* Event listener for form submission */




/* Form Intake Handler */




