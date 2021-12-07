// Enter JavaScript for the exercise here...
//Requirements - 
//1. Event Listener for Submission - The page should not refresh (prevent default) The number must be positive and they must select either debit or credit from the dropdown.
//   - If these conditions are not met - use div.error element to display the error message
//   - When the conditions are met - DOM APIS must be used to construct the necessary document fragment to add to the DOM
//      - See figure 3 - With each addition, the totals must be correctly tracked and displayed
//      - The submit field/form should be reset after each successful addition



const addTransaction = function (evt) {
    
    evt.preventDefault();

    //Reference what we are adding to
    let tableTransactions = document.querySelector('.transactions');


    //Variables to create the DOM fragment/Transaction list
    let boxText, tr, td, cd, trashIcon, debitOrCredit, menuValue, trash;

    boxText = evt.target.elements['description'].value;

    debitOrCredit = evt.target.elements['type'].value;
    
    dollarAmount = evt.target.elements['currency'].value;


    //Create nodes to build DOM fragment
    td = document.createElement('tr');
    td = document.createElement('td');
    cd = document.createElement('td');
    da = document.createElement('td');
    trash = document.createElement('td');


    dollars = document.createTextNode(dollarAmount);
    menuValue = document.createTextNode(debitOrCredit);
    transText = document.createTextNode(boxText);


    //set attributes
    td.setAttribute("class","fa fa-trash-o")
    td.classList.add('.fa');


    //Build it
    td.appendChild(transText);
    cd.appendChild(menuValue);
    da.appendChild(dollars);


    tableTransactions.appendChild(td);
    tableTransactions.appendChild(cd);
    tableTransactions.appendChild(da);
    tableTransactions.appendChild(td);

    evt.target.reset();

}

const updateTotal = function () {

    totalDebits = document.querySelector('table.transactions tr.credit');
    totalCredits = document.querySelector('table.transactions tr.debit');

    console.log (dollars);

}

document
      .querySelector('form')
      .addEventListener('submit', updateTotal);

//event listener for submit
document
      .querySelector('form')
      .addEventListener('submit', addTransaction);



//2. Event listener for handling clicks on the trash icon.
//   - User should be prompted with a confirm box allowing them to either delete or abort the deletion
//   - If user chooses to delete, the table should be updated and display the appropriate total


const deleteRow = function (evt) {

    let tableRow = document.querySelector('.td');
    let target = evt.target;

	refChild = target.parentElement;
    
    let answer = window.confirm("This will delete this row, continue?");
    if (answer) {

       tableRow.removeChild(refChild);
} }

document.querySelector('.fa')
        .addEventListener('click', deleteRow);


//Function that refreshes the page every 2 minutes of inactivity - with alert window.
    function idleRefresh() {
    let time;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;       
    window.onclick = resetTimer;     
    window.onkeydown = resetTimer;   
    window.addEventListener('scroll', resetTimer, true); 

    function resetTimer() {
        clearTimeout(time);
        time = window.setTimeout(function () {
            alert("You have been inactive for 2 minutes - page will refresh now");
            window.location.reload();
        }, 120000);  
    }
}
idleRefresh();

//Struggled a lot with the constructing of the DOM. I was fairly comfortable with the examples in class but I felt like I had no idea what I was doing on this assignment. 