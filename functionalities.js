const seats = document.getElementsByClassName("seats");
let clickedSeat = [];

let cellClicked = false;
let numberTyped = false;

const coupons = ["NEW15", "Couple 20"];

let totalPrice = 550 * clickedSeat.length;
let grandTotal = totalPrice;

document.getElementById("total-price").innerText = totalPrice;
document.getElementById("grand-total").innerText = grandTotal;


document.getElementById("seatCounter").innerText = clickedSeat.length;
document.getElementById("seat-left").innerText = 40 - clickedSeat.length;



for (let seat of seats) {

    seat.addEventListener("click", function () {

        if ((!clickedSeat.includes(seat.innerText)) && clickedSeat.length < 4) {
            seat.style.backgroundColor = "#1DD100";
            seat.style.color = "white";
            clickedSeat.push(seat.innerText);

            document.getElementById("seatCounter").innerText = clickedSeat.length;
            document.getElementById("seat-left").innerText = 40 - clickedSeat.length;

            console.log(seat.innerText);

            let div = `
            <div class="grid grid-cols-3" id="${seat.innerText}">
                <div>${seat.innerText}</div>
                <div class="flex justify-end">Economoy</div>
                <div class="flex justify-end">550</div>
            </div>
            `;

            document.getElementById("selected-seat-list").innerHTML += `${div}`

            totalPrice = 550 * clickedSeat.length;
            grandTotal = totalPrice;

            document.getElementById("total-price").innerText = totalPrice;
            document.getElementById("grand-total").innerText = grandTotal;


            console.log(clickedSeat)


        }



        if (clickedSeat.length === 4) {
            document.getElementById("coupon").style.backgroundColor = "white";
            document.getElementById("coupon-container").style.backgroundColor = "white";
            document.getElementById("coupon-button").style.backgroundColor = "#1cd100";

            document.getElementById("coupon").removeAttribute("disabled");
            document.getElementById("coupon-button").removeAttribute("disabled");

        }


        if (clickedSeat.length >= 1) {

            cellClicked = true;

        }
        if (cellClicked && numberTyped) {
            document.getElementById("form-button").style.backgroundColor = "#1DD100";

            document.getElementById("form-button").removeAttribute("disabled");
        }


    })
}

let count = 0;
document.getElementById("phone-number").addEventListener("keyup", function () {
    console.log(document.getElementById("phone-number").value);


    if (document.getElementById("phone-number").value) {
        numberTyped = true;
    }
    if (cellClicked && numberTyped) {
        document.getElementById("form-button").style.backgroundColor = "#1DD100";

        document.getElementById("form-button").removeAttribute("disabled");
    }

    if (!document.getElementById("phone-number").value) {

        count++;

        if (count >= 1) {
            document.getElementById("form-button").style.backgroundColor = "#1DD10079";

            document.getElementById("form-button").setAttribute("disabled", "")
        }
    }

})




document.getElementById("coupon-button").addEventListener("click", function () {
    const coupon = document.getElementById("coupon").value;

    document.getElementById("coupon").value = "";

    if (coupons.includes(coupon)) {
        document.getElementById("coupon-container").style.display = "none";
        document.getElementById("total-price-container").style.borderBottom = "solid 1px #03071233";

        if (coupon === coupons[0]) {
            grandTotal = totalPrice * 0.85;
            document.getElementById("grand-total").innerHTML = `${grandTotal} <span class="text-base font-normal text-red-500">(-15%)</span>`;
            document.getElementById("cupon-check-alert").innerText = ""
        } else if (coupon === coupons[1]) {
            grandTotal = totalPrice * 0.80;
            document.getElementById("grand-total").innerHTML = `${grandTotal} <span class="text-base font-normal text-red-500">(-20%)</span>`;
            document.getElementById("cupon-check-alert").innerText = ""
        }

    } else {
        document.getElementById("cupon-check-alert").innerText = "Invalid Coupon*";
    }
})




document.getElementById("form-button").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone-number").value;



    if (phoneNumber) {
        document.getElementById("nex-pressed").style.display = "flex";

    }

})

document.getElementById("continue-button").addEventListener("click", function () {

    document.getElementById("nex-pressed").style.display = "none";

})