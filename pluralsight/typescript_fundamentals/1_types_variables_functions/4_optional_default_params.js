var print_name;
print_name = function (first, last) {
    console.log('Full name is ' + first + ' ' + last);
};
var print_name_optional_last = function (first, last) {
    if (last === undefined) {
        last = '';
    }
    console.log('Full name with optional last name is ' + first + ' ' + last);
};
var print_name_default_first = function (first, last) {
    if (first === void 0) { first = 'Mudambi'; }
    console.log('Full name with default first name is ' + first + ' ' + last);
};
print_name('Mudambi', 'Srivatsa');
print_name_optional_last('Mudambi');
print_name_default_first(undefined, 'Srivatsa');
