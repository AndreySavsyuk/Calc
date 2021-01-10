let a = Number(prompt('Enter a: ', ''));
let b = Number(prompt('Enter b: ', ''));
if (isNaN(a) || isNaN(b) ) {
	alert('a or b is not a number');
}else {
		let x = prompt('Enter operation:  +, -, *, %,/ ');
switch (x) {
  case '+':
  let c = a + b;
    alert(c);
    break;
  case '-':
  let d = a - b;
   alert(d);
   break;
  case '*':
  let e = a * b;
    alert(e);
    break;
    case '%':
      let j = a % b;
			alert(j);
			break;
  case '/':
		if (b === 0) {
			alert ('divided by zero is not allowed');}
			else{
  let f = a / b;
    alert(f);
		break;}
				}
		}
		



