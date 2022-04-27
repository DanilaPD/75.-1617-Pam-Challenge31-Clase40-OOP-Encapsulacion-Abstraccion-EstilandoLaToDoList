//* Llamamos a algo que está dentro del "objeto" sin preocuparnos por la información que tiene en su interior.

function spotiRadio(artist) {
    this.artist = artist

    this.play = function () {
        console.log(`Click to listen to the songs of ${this.artist}.`);
    }

    this.pause = function () {
        console.log(`Click to pause the songs of ${this.artist}.`);
    }

    this.stop = function () {
        console.log(`Click to stop the reproduction of the songs of ${this.artist}.`);
    }
};

let newRadio = new spotiRadio("Lady Gaga");
newRadio.play();