// return the value

// function :-
function add(a, b) {
  let d = a + b;
  return d;
}

// implement :-
let c = add(5, 6);

document.write(c);

// jaha pe return mil gaya  to uske niche ka code excute nahi hoga .
// jaise ek hi function me  2 return nhi use kar sakte warna niche like

function add(a, b) {
  return 0;
  // (yhai se ye functon khatam ho jaega  aur  niche ka code nahi excute hoga )
  let d = a + b;
  return d;
}

// we will use like this :-
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }

  // implementation
  let c = compare(5, 7);
  document.write(c);
}
