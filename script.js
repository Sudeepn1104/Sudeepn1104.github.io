// PSI values from the Tiny MLOps Observatory run (6 features x 10 batches)
const rows = {
  age:              [.03,.05,.08,.21,.48,.52,.81,.99,1.29,1.66],
  credit_score:     [.04,.03,.01,.03,.02,.02,.01,.01,.02,.02],
  debt_ratio:       [.02,.02,.02,.01,.02,.03,.02,.02,.02,.02],
  employment_years: [.01,.04,.06,.12,.33,.34,.46,.54,.58,.83],
  income:           [.02,.02,.07,.18,.30,.26,.48,.76,.89,1.15],
  loan_amount:      [.04,.01,.08,.10,.13,.12,.30,.36,.41,.57]
};
const grid = document.getElementById("hm-grid");
if (grid) {
  let i = 0;
  Object.entries(rows).forEach(([name, vals]) => {
    const label = document.createElement("div");
    label.className = "hm-name"; label.textContent = name;
    grid.appendChild(label);
    vals.forEach((v, b) => {
      const c = document.createElement("div");
      const cls = v < 0.1 ? "g" : v < 0.2 ? "y" : "r";
      c.className = "hm-cell " + cls;
      c.title = `${name}, batch ${b}: PSI ${v}`;
      c.style.animationDelay = (b * 70 + (i % 6) * 25) + "ms";
      grid.appendChild(c);
    });
    i++;
  });
  grid.appendChild(document.createElement("div"));
  for (let b = 0; b < 10; b++) {
    const t = document.createElement("div");
    t.className = "hm-ax"; t.textContent = b;
    grid.appendChild(t);
  }
}
