// 1-masla

{
  function yosh(son) {
    if (son > 18) {
      return "kattasiz";
    } else {
      return " kichiksiz";
    }
  }

  console.log(yosh(17));
}

// 2-masala

{
  function son(a) {
    if (a >= 0) {
      return "musbat";
    } else {
      return " manfiy";
    }
  }

  console.log(son(2));
}

// 3-masala

{
  let musbat = 0;

  function son(a, b, c) {
    if (a >= 0) {
      musbat++;
    }
    if (b >= 0) {
      musbat++;
    }
    if (c >= 0) {
      musbat++;
    }
  }

  son(2, 4, 5);
  console.log(`${musbat}-ta musbat son`);
}

// 4-masala

{
  function son(a) {
    if (a % 2 !== 0) {
      return `${a} toq son`;
    } else {
      return `${a} juft son`;
    }
  }

  son(2);
  console.log(son(1254678));
}

// 5-masala

{
  function son(a) {
    if (a % 2 === 0) {
      return a / 2;
    } else {
      return a * 2;
    }
  }

  console.log(son(9));
}

// 6-masala
{
  function son(a) {
    if (a > 0) {
      return a + 1;
    } else if (a === 0) {
      return (a = 10);
    } else {
      return a + 2;
    }
  }
  console.log(son(-8));
}

// 7-masala
{
  function big(a, b) {
    if (a > b) {
      return `a = ${a} katta, b = ${b} kichkina`;
    } else {
      return `a = ${b} katta, b = ${a} kichkina`;
    }
  }
  console.log(big(21, 2));
}

// 8-masala

{
  function musbatJuft(a) {
    if (a % 2 === 0) {
      if (a > 0) {
        return a + 1;
      } else {
        return a;
      }
    } else {
      return a;
    }
  }
  console.log(musbatJuft(8));
}

// 9-masala

{
  function big(a, b) {
    if (a > b) {
      return a * 10;
    } else {
      return b * 10;
    }
  }
  console.log(big(10, 2));
}

// 10-masala

{
  let musbat = 0;
  let toq = 0;

  function son(a, b, c) {
    if (a % 2 === 0) {
      musbat++;
    } else {
      toq++;
    }
    if (b % 2 === 0) {
      musbat++;
    } else {
      toq++;
    }
    if (c % 2 === 0) {
      musbat++;
    } else {
      toq++;
    }
  }

  son(2, 9, 5);
  console.log(`${musbat}-ta musbat son ${toq} toq son`);
}
