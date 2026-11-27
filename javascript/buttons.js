// Replaces whatever is in #newForm with a single heading
let showHeading = (text) => {
    let container = document.getElementById("newForm");
    let h1 = document.createElement("h1");
    h1.innerText = text;
    container.replaceChildren(h1);
}

let viewGarage = () => {
    let container = document.getElementById("newForm");
    let title = document.createElement("h1");
    title.textContent = "My Garage";

    let list = document.createElement("div");
    list.className = "row g-3 mt-1";

    if (garage.size === 0) {
        let empty = document.createElement("p");
        empty.textContent = "Your garage is empty. Use Add Car to park your first Rover.";
        container.replaceChildren(title, empty);
        return;
    }

    garage.cars.forEach((car) => {
        let col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4";

        let card = document.createElement("div");
        card.className = "card-rover";

        let name = document.createElement("h3");
        name.className = "h5";
        name.textContent = String(car);

        let details = document.createElement("p");
        details.className = "mb-0";
        details.textContent = `${car.odometer.toLocaleString()} miles · ${car.jobs.length} jobs logged`;

        card.append(name, details);
        col.append(card);
        list.append(col);
    });

    container.replaceChildren(title, list);
}

let addCar = () => {
    let container = document.getElementById("newForm");
    container.innerHTML = `
        <h1>New Rover</h1>
        <form id="addCarForm" class="d-flex flex-column gap-3" novalidate>
            <div>
                <label for="make" class="form-label">Make</label>
                <input type="text" id="make" name="make" class="form-control" required placeholder="e.g., Land Rover">
            </div>
            <div>
                <label for="model" class="form-label">Model</label>
                <input type="text" id="model" name="model" class="form-control" required placeholder="e.g., LR4">
            </div>
            <div>
                <label for="year" class="form-label">Year</label>
                <input type="number" id="year" name="year" class="form-control" required min="1948" max="2100" placeholder="e.g., 2012">
            </div>
            <div>
                <label for="odometer" class="form-label">Odometer (miles)</label>
                <input type="number" id="odometer" name="odometer" class="form-control" min="0" value="0">
            </div>
            <div><button type="submit" class="btn btn-primary">Add to Garage</button></div>
        </form>
        <div id="formMessage" class="mt-3" role="status"></div>`;

    document.getElementById("addCarForm").addEventListener("submit", submitCar);
}

let submitCar = (event) => {
    event.preventDefault();
    let form = event.target;

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    let data = new FormData(form);
    let car = new Car(
        data.get("make").trim(),
        data.get("model").trim(),
        parseInt(data.get("year"), 10),
        parseInt(data.get("odometer"), 10) || 0
    );
    garage.addCar(car);
    garage.print();

    form.reset();
    form.classList.remove("was-validated");

    // textContent keeps user input from being interpreted as HTML
    let message = document.getElementById("formMessage");
    message.textContent = `Added ${car} to your garage (${garage.size} total). `;
    message.className = "mt-3 alert alert-success";

    let link = document.createElement("a");
    link.href = "#";
    link.textContent = "View my garage";
    link.addEventListener("click", (e) => {
        e.preventDefault();
        viewGarage();
    });
    message.append(link);
}

let updateRecords = () => showHeading("Update Records");

let viewRecords = () => showHeading("View Records");