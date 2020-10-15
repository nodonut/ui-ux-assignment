# UI/UX Developer - Assignment

---

To get the project running follow the commands:

1. Download [Bootstrap](https://getbootstrap.com/)
2. Create a boilerplate html
3. Add the relevant link tags
4. Let's start with the navbar

```
<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">XYZ</a>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">Overview</a></li>
          <li class="active"><a href="#">Requests</a></li>
          <li><a href="#">Shipments</a></li>
          <li><a href="#">Invoices</a></li>
          <li><a href="#">Employees</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    </div>
  </nav>
```

1.  Add the `navbar` and `navbar-default` classes to the nav tag
2.  Then we add another div `container-fluid`, we use the fluid container to take up whole width
3.  Add the div for `navbar-header` so we can add our logo or name
4.  Then we create a `collapse navbar-collapse` div
5.  Inside the div we place a ul with a class of `nav navbar-nav`
6.  The li tags contain the links to the different web pages
7.  And with that navbar is done
8.  Now, let's make the header section of our page

```
<header id="header">
      <div class="container">
```

1. Inside the `header` tag we add a container
2. We do not want this container to take up the whole space so we are not making it fluid
3. Next we need to create a row and add flexbox properties to it.
4. The `align-items-center` is modified in the given style.css file

```
        <div class="row align-items-center">
          <div class="col-md-2">
              <h2 class="mt-4">Requests</h2>
          </div>
          <div class="col-md-5">
            <button class="btn btn-default" id="tableBtn">
              <span class="glyphicon glyphicon-th-list"></span> Table
            </button>
            <button class="btn btn-default" id="boardBtn">
              <span class="glyphicon glyphicon-th-large
              "></span> Board
            </button>
          </div>
```

5. Using bootstrap we create 2 columns
6. The first column will work as the heading for the page we are on, in this case it's the Requests page
7. After that we will create another column for the table and board buttons
8. These buttons will take 5 slots so that we can push the rest of the columns to the right
9. Inside the first column, we have an h2 referring to the current page
10. Inside the second column, we have two buttons one with id of `tableBtn` and another with `boardBtn`
11. These IDs will be useful when we need to use JavaScript for interactivity
12. The buttons have the class of `btn btn-default`
13. Inside the buttons we have `span` tag which shows the glyphicons from Bootstrap
14. We add the heading next to the span
15. Next we move on to the right side of our header section

```
          <div class="col-md-3">
            <div class="btn-group flex-end">
              <button class="btn" title="Search">
                <span class="glyphicon glyphicon-search"></span>
              </button>
              <button class="btn" title="Filter"><span class="glyphicon glyphicon-filter"></span>
              </button>
              <div class="dropdown">
              <button class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Settings">
                <span class="glyphicon glyphicon-cog"></span>
              </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li class="dropdown-header"><a href="#">Card Properties</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">New</a></li>
                  <li><a href="#">In Progress</a></li>
                  <li><a href="#">Awaiting</a></li>
                  <li><a href="#">Done</a></li>
                  <li><a href="#">Closed</a></li>
                  <li><a href="#">Rejected</a></li>
                </ul>
              </div>
            </div>
          </div>
```

16. Here we another column and inside the column div we have a `btn-group`
17. This group includes buttons with similar classes as the previous ones and span with glyphicons.
18. These buttons only have the `btn` class and not the default for different styling
19. Next we have a div with `dropdown` class
20. Inside the class we have a button with `dropdown-toggle` as a class
21. Bootstrap requires your dropdown buttons to have a `data-toggle="dropdown"` attribute
22. Next we have the ul with the class of `dropdown-menu`
23. This contains all the list items for our dropdown menu
24. The first item in the list is the header below which we add a divider
25. The rest our the normal list items which contain additional functionality depending on your script.

```
    <div class="col-md-2">
        <button class="btn btn-success">
              <span class="glyphicon glyphicon-plus"></span>
            New Request</button>
          </div>
        </div>
      <hr />
    </div>
  </header>
```

26. The last column contains our New Request btn with a plus glyphicon next to it
27. To create a separation between the header and our main table or board we use a `hr` tag

# Now let's create the table and board

## TABLE

```
<div class="container tables">
      <table class="table">
        <thead>
          <th scope="col"><input type="checkbox"></th>
          <th scope="col">Request No.</th>
          <th scope="col">Creation Date</th>
          <th scope="col">Due Date</th>
          <th scope="col">Reporter</th>
          <th scope="col">Client</th>
          <th scope="col">Client's Phone</th>
          <th scope="col">Cost</th>
          <th scope="col">Status</th>
        </thead>
        <tbody id="tbody">
          <tr>
            <th scope="row"><input type="checkbox"></th>
            <td>No. 123456789</td>
            <td>10 October, 2020</td>
            <td>20 October, 2020</td>
            <td>John Doe</td>
            <td>Jane Doe</td>
            <td>(444) 812-3455</td>
            <td>$1234.54</td>
            <td><span class="glyphicon glyphicon-star"></span> New</td>
          </tr>
        </tbody>
      </table>
    </div>
```

1. Here we have a div with class of `container` and `tables`
2. The `tables` class is used for scripting so we can grab it using DOM Manipulation to toggle between table and board/kanban
3. The `table` tag has a class of `table` which is a bootstrap component
4. We add the headings of the table using `thead` and `th` tags
5. Then we have `tbody` tag for data inside our table
6. Inside the `tbody` tag we have a `th` for our first column which is a checkbox
7. The rest are `td` tags which contain our data

---

## BOARD/KANBAN

```
<div class="container kanban invisible">
      <div class="d-flex justify-content-between">
        <div class="p-2 d-flex flex-column justify-content-start">
          <h5><span class="glyphicon glyphicon-star"></span> New</h5>
          <hr />

          <div class="dropzone">
            <div class="card mb-2" style="width: 18rem;" draggable="true">
              <div class="card-body">
                <h5 class="card-title">No. 123456789</h5>
                <br />
                <p><span class="glyphicon glyphicon-credit-card"></span> $1234.54</p>
                <p><span class="glyphicon glyphicon-calendar
                  "></span> 10 Oct, 2020</p>
                <p><span class="glyphicon glyphicon-user
                  "></span> John Doe</p>
                <p><span class="glyphicon glyphicon-phone
                  "></span> iPhone XR</p>
              </div>
            </div>
            <div class="card" style="width: 18rem;" draggable="true">
              <div class="card-body">
                <h5 class="card-title">No. 123456789</h5>
                <br />
                <p><span class="glyphicon glyphicon-credit-card"></span> $1234.54</p>
                <p><span class="glyphicon glyphicon-calendar
                  "></span> 10 Oct, 2020</p>
                <p><span class="glyphicon glyphicon-user
                  "></span> John Doe</p>
                <p><span class="glyphicon glyphicon-phone
                  "></span> iPhone XR</p>
              </div>
            </div>
          </div>
        </div>
        add more board divs here...
    </div>
```

1. For simplicity let's take the first board, the rest can be added as divs
2. First we have a div with classes `container`, `kanban`, and `invisible`
3. `Container` class makes sure that our boards stay within our set boundaries
4. `kanban` class is for scripting, we use this class to grab the whole div so we can toggle visible and invisible
5. `invisible` we set the kanban board invisible right from the start to make it easier to toggle between the table and board view
6. To align the boards within our container we use the flexbox
7. On the first div we use `d-flex` a bootstrap display class
8. Then we add `justify-content-between` to make sure the items inside the div are spaced out perfectly
9. In the next div, we have `class="p-2 d-flex flex-column justify-content-start"`
10. The `p-2` is for padding the div so items are not sticking to a side
11. `d-flex` and `flex-column` are for setting the flexbox property on the div
12. `flex-column` is modified to make sure our flex items are being displayed in a row
13. `justify-content-start` makes sure that our flex items appear at the top of our board
14. Next we have a div with class `dropzone` this is used for implementing drag and drop functionality
15. Inside the dropzone we use a card to show our tasks
16. Each card has margin bottom of 2 to make sure the cards have some space between them
17. We use inline css to add width to the cards of 18rems
18. To enable drag and drop functionality we need to add a `draggable = true` attribute to the card
19. Inside the `card-body` div we have an `h5` and `hr`
20. We have some `p` and `span` tags, the `span` tags are for the icons

# now JavaScript

```
const tableBtn = document.getElementById('tableBtn');
const boardBtn = document.getElementById('boardBtn');
const tables = document.querySelector('.tables');
const board = document.querySelector('.kanban')
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');
const emptyDiv = document.createElement('div');
const cog = document.querySelector('.glyphicon-cog');
```

1. We grab all the relevant div tags with their IDs or classes

```
tableBtn.addEventListener('click', () => {
  tables.classList.toggle('invisible');
  board.classList.add('invisible');
});

boardBtn.addEventListener('click', () => {
  board.classList.toggle('invisible');
  tables.classList.add('invisible');
});

```

1. We grab the table and board buttons which we created in HTML
2. Adding an event listener on both of them
3. In the `tableBtn` we use the `toggle` method on `tables` to show our table
4. In the next line we disable the board so that table and board don't show up at the same time
5. We do the same with `boardBtn` except methods are reversed

## Drag & Drop

```
cards.forEach(card => {
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});
```

1. We grab all the cards in our board and attach event listeners to each
2. The _dragstart_ and _dragend_ event listeners are used so that the item can be picked up and dragged

```
dropzones.forEach(zone => {
  zone.addEventListener('dragover', dragOver);
  zone.addEventListener('dragenter', dragEnter);
  zone.addEventListener('dragleave', dragLeave);
  zone.addEventListener('drop', dragDrop);
})
```

3. Next we use dropzones which we created in HTML
4. We attach event listeners to each of the zone
5. `dragover` listens for when an item is being dragged or in this case hovering
6. `dragenter` listens for when our item has entered the zone div
7. `dragleave` listens for when our item has left the zone div
8. `drop` listens for when an item has been dropped onto the zone div

```
function dragStart() {
  this.classList.add('hold');
  setTimeout(() => (this.classList.add('hide')), 0);
}
```

9. The dragstart function adds a `hold` class to the div we have decided to drag
10. We use a settimeout so that the `hide` class isn't added instantly, otherwise our div would disappear

```
function dragEnd() {
  this.classList.remove('hold');
  this.classList.remove('hide');
}
```

11. When the item has been dragged and dropped we need to remove the `hold` and `hide` classes
12. This makes sure that our divs can be seen

```
function dragOver(e) {
  e.preventDefault();

}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');

}
```

13. In the dragOver function we want to prevent the default action otherwise we won't be able to drop our div
14. The dragEnter function adds `hovered` to the div we have grabbed onto and whenever it is close to the dropzone
15. dragLeave function removes the `hovered` class

```
function dragDrop() {
  cards.forEach(card => {
    if(card.classList.contains('hold')){
      this.append(card);
      this.classList.remove('hovered');
    }
  })
}
```

16. The dragDrop function loops through the cards and using the if statement we find out which card is the one which needs to be dropped
17. In this scope, `this` refers to the dropzone
18. When we drag and drop our card it will show up in the DOM
