console.log('js'); //test JS

$(document).ready(readyNow);
let total = 0;
let deleteButton = `<button class="del-btn"> Delete </button>`;

function readyNow() {

    console.log('JQ') // test JQ
    $('#submit').click(submitButton);

    //append to DOM
    //  console.log(accessEmployee);

}

class Employee { //create class to store employee information
    constructor(firstName, lastName, iD, jobTitle, annualSalary) {
        this.first = firstName;
        this.last = lastName;
        this.id = iD;
        this.title = jobTitle;
        this.salary = annualSalary;
    }
}

function submitButton() {

    let employees = [];
    // let newRow = $('table').append('<tr><td></td><td></td> <td></td> <td></td> <td></td></tr>')
    let firstName = $('.firstName').val();
    let lastName = $('.lastName').val();
    let id = $('.id').val();
    let jobTitle = $('.title').val();
    let salary = parseInt($('.annualSalary').val());
    employees.push(new Employee(firstName, lastName, id, jobTitle, salary));
    $('.firstName').val('');
    $('.lastName').val('');
    $('.id').val('');
    $('.title').val('');
    parseInt($('.annualSalary').val('')); // clear input fields.
    // create a new class called employee everytime information is submitted
    // push information into an array
    for (let emp of employees) {
        $('table').append(`<tr><td>` + firstName + `</td><td>` + lastName + `</td> <td>` + id + `</td> <td>` + jobTitle + '</td> <td>' + salary + deleteButton + `</td></tr>`);
        // $('table').append(deleteButton)
        total += (Math.floor((emp.salary) / 12));
        $('#total').text(`Total Monthly: $` + total);
    }
    $('.del-btn').on('click', deleteEmployee);
    if (total > 20000) {
        $('body').css('background-color', 'red');
    }

}

function deleteEmployee() {
    console.log($(this));
    $(this).parent().parent().remove();

}

//create id for each row that equals employee id
