const header = () => {
    let banner = document.getElementById("heading");
    if (!banner) return;
    banner.innerHTML = `
        <nav class="navbar navbar-expand-md rl-navbar">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="images/roverlog-logo.png" alt="RoverLog logo" class="rl-logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon" style="filter: invert(1)"></span>
                </button>
                <div class="collapse navbar-collapse" id="nav">
                    <ul class="navbar-nav ms-auto align-items-md-center gap-md-2">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link active" href="app.html">My Garage</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;
}