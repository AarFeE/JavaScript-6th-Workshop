console.log("Mensaje 1: Inmediatamente");

setTimeout(() => {
    console.log("Mensaje 2: Con timeout de 0 segundos");
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

/* Conclusions:
Javascript executes synchronic functions first, this is why 'Mensaje 1' is executed before
any other console.log (besides the fact it's the first line of code) then, it proceeds to print
'Mensaje 2' which is executed after setTimeout() finishes waiting. Even though its setTimeout() is
set to 0, it still has to wait for all the synchronic services to be done to allow the queue to then
process the microtasks like promises, and afterwards it goes for macrotasks such as setTimeout() ones
and concludes the code's execution*/