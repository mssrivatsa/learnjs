var print_name: Function;
print_name = function(first: string, last: string) {
  console.log('Full name is ' + first + ' ' + last);
}

var print_name_optional_last = function(first: string, last?: string) {
  if(last === undefined) {
    last = '';
  }

  console.log('Full name with optional last name is ' + first + ' ' + last);
}

var print_name_default_first = function(first = 'Mudambi', last: string) {
  console.log('Full name with default first name is ' + first + ' ' + last);
}

print_name('Mudambi', 'Srivatsa');
print_name_optional_last('Mudambi');
print_name_default_first(undefined, 'Srivatsa');
