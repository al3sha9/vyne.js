// basic render implementation
let state = reactive({ toShowAsTitle: "Hello and Welcome to" });

function renderApp() {
  render("#container", `<h1>${state.toShowAsTitle}</h1>`);
}

renderApp();

setTimeout(() => {
  state.toShowAsTitle = "Vyne Js";
}, 1000);
