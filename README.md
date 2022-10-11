# Angular_Routing_Class_13
Angular exercise with components and data-binding
<hr>
** As of 10/11 order styling changes correctly but not using seperate components. Everything done from order-dashboard. Still needs work. Bonus not yet attempted.
<hr>
Class Exercise:

<ol>
<li> Create a new Angular application. </li>
<li> Generate three components using the CLI:

order-dashboard: a component that displays all customer orders.
first-five-orders: a component that displays content for the first five orders.
all-other-orders: a component that displays content for any order that isn't in the first five group.</li>

<li> The OrderDashboardComponent should contain a list of all orders, a button that starts the workday, and a button that ends the workday.

When the workday begins, a new order should be created every 2 seconds. (Orders should be an incrementing number starting from 1.)
When the workday ends, no more orders should be placed. </li>

<li>The FirstFiveOrdersComponent & the AllOtherOrdersComponent should be styled differently using colors, sizes, and content.

FirstFiveOrdersComponent should only show the first five orders.
AllOtherOrdersComponent should display all orders past the first five.</li>
<li>Publish your project to GitHub!</li>
</ol>

Bonus: Create a third component, lottery-winning-order, with a gold background and display this component every seventh order.
