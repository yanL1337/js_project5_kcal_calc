const getAndinsert = () => {
  const height = Number(document.querySelector("#height").value);
  const age = Number(document.querySelector("#age").value);
  const weight = Number(document.querySelector("#weight").value);

  const gender = document.querySelector("input[name=gender]:checked").value;

  const activity = Number(document.querySelector("option:checked").value);
  console.log(activity);
  const grundUmsatz = calculate(height, age, weight, gender, activity)[0];
  const gesamtUmsatz = calculate(height, age, weight, gender, activity)[1];

  document.querySelector("#grundKcal").innerHTML = grundUmsatz;
  document.querySelector("#gesamtKcal").innerHTML = gesamtUmsatz;
  document.querySelector(".tg").style.display = "inline-table";

  document.querySelector("#grundKJ").innerHTML = (grundUmsatz * 4.1868).toFixed(
    2
  );
  document.querySelector("#gesamtKJ").innerHTML = (
    gesamtUmsatz * 4.1868
  ).toFixed(2);
};

const calculate = (groeße, alter, gewicht, geschlecht, activeWert) => {
  let grundUmsatz, gesamtUmsatz;

  if (geschlecht === "f") {
    grundUmsatz = 655.1 + 9.6 * gewicht + 1.8 * groeße - 4.7 * alter;
    gesamtUmsatz = grundUmsatz * activeWert;
  } else {
    grundUmsatz = 66.47 + 13.7 * gewicht + 5 * groeße - 6.8 * alter;
    gesamtUmsatz = grundUmsatz * activeWert;
  }

  return [grundUmsatz.toFixed(2), gesamtUmsatz.toFixed(2)];
};
