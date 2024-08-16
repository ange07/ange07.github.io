var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Front-End Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Fusionando psicología y tecnología')
    .pauseFor(2500)
    .deleteAll()
    .start();