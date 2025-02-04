"use strict"

//export class Answer {
    const board = document.getElementsByClassName("board")
    const form = document.getElementsByTagNameNS("form")

board.insertAdjacentHTML("afterbegin", '')

function removeAttribute() {
    document.getElementsById("row-0").removeAttribute("inert")
    
}
console.log(removeAttribute())
//}

{/* <form class="row" id="row-0" >
<input class="letter" type="text" name="letter-0" id="row-0--0" maxlength="1">
<input class="letter" type="text" name="letter-1" id="row-0--1" maxlength="1">
<input class="letter" type="text" name="letter-2" id="row-0--2" maxlength="1">
<input class="letter" type="text" name="letter-3" id="row-0--3" maxlength="1">
<input class="letter" type="text" name="letter-4" id="row-0--4" maxlength="1">
<input type="submit" hidden>
</form>
<input type="submit"></input> */}
