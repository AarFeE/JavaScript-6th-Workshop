(async () => {
    try {
        const theData = await loadFile();
        const theReservations = [];
        let id = 1;

        while (true) {
            console.log(theData);
            console.log(theReservations);
            let option = getOption();

            if (option == 5) {
                break
            }

            if (option == 1) {
                id += makeReservation(theData, theReservations, id)
            }

            if (option == 2) {

            }
        }
    } catch (error) {
        alert(error);
    }
})()




async function loadFile() {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("Couldn't find the file in the specified URL.");
        }
        const data = await response.json();
        return data
    } catch (error) {
        throw new Error(`Something unexpected ocurred during the file retrieval -${error.message}-`);
    }
}

function callPrompt(callback, msg) {
    while (true) {
        let val = prompt(msg);

        if (callback(val)) {
            return val
        } else {
            alert("The inserted value isn't valid.")
        }
    }
}

function getOption() {
    let opt = callPrompt((value) => 1 <= value && value <= 5,
        "Insert the number of the option you want to do:\n\n" +
        "1. Make a Reservation\n" +
        "2. Visualize Reservations\n" +
        "3. Edit a Reservation\n" +
        "4. Cancel a Reservation\n")

    return opt
}

function makeReservation(data, reservations, i) {
    let numPeople = callPrompt((value) => 1 <= value && value <= 6, "Insert the number of people that will use the room:");
    let filteredRooms = data.rooms.
        filter(({ roomTypeId, availability }) => data.roomTypes.find(({ id }) => id == roomTypeId).capacity >= numPeople && availability == true);

    let resNum = callPrompt((value) => filteredRooms.some(({ number }) => number == value), `ROOMS AVAILABLE FOR RESERVATION\n\n${filteredRooms.
        map((value) => `Room Number: ${value.number}\nType: ${data.roomTypes.find(({ id }) => id == value.roomTypeId).name}\nPrice/Night: ${value.priceNight}`).join('\n\n')}
                    \nInsert the number of the room you want to reserve:`);

    let customer = prompt("Insert your name for the reservation:").toUpperCase();

    let regexDate = new RegExp(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
    let begDate = callPrompt((value) => regexDate.test(value), "Insert the beginning date of the reservation in the format 'DD/MM/YYYY':");
    let endDate = callPrompt((value) => regexDate.test(value), "Insert the end date of the reservation in the format 'DD/MM/YYYY':");

    reservations.push({
        id: i,
        customer,
        room: resNum,
        beginningDate: begDate,
        endDate
    })
    data.rooms.find(({ number }) => number == resNum).availability = false;
    let reservedRoom = data.rooms.find(({ number }) => number == resNum);
    alert(`FOUND ROOM\n\nRoom Number: ${reservedRoom.number}\nType: ${data.roomTypes.find(({ id }) => id == reservedRoom.roomTypeId).name}\n` +
        `Price/Night: ${reservedRoom.priceNight}\n\nThe room has been reserved succesfully!`);

    return i++
}