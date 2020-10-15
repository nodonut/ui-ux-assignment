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
              <span class="glyphicon glyphicon-plus
            "></span>
              New Request</button>
          </div>
        </div>
        <hr />
      </div>
    </header>
```

    26. The last column contains our New Request btn with a plus glyphicon next to it
    27. To create a separation between the header and our main table or board we use a `hr` tag
