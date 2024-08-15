import { Pizza, PizzaProps } from "./models/Pizza";

const rootElement = document.querySelector('.root')!

function createPizzaTemplate(pizza: PizzaProps): string {
  return `
    <div class="pizza">
      <h2>${pizza.title}
      <p class="toppings">${pizza.toppings.join(', ')}</p>
      <p>${pizza.description}</p>
      <span>$${pizza.price}</span>
    </div>
  `
}

function renderTemplates(templates: string[], parent: Element): void {
  const templateElement = document.createElement('template')

  for (const t of templates) {
    templateElement.innerHTML += t
  }

  parent.append(templateElement.content)
}

document.addEventListener('DOMContentLoaded', async () => {
  // load data
  const pizzas = await Pizza.loadAll()

  console.log(pizzas)

  // create template string
  const pizzaTemplates = pizzas.map(createPizzaTemplate)

  // render templates to DOM
  renderTemplates(pizzaTemplates, rootElement)

})