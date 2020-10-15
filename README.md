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

..1. Add the `navbar` and `navbar-default` classes to the nav tag
..2. Then we add another div `container-fluid`, we use the fluid container to take up whole width
..3. Add the div for `navbar-header` so we can add our logo or name
..4. Then we create a `collapse navbar-collapse` div
..5. Inside the div we place a ul with a class of `nav navbar-nav`
..6. The li tags contain the links to the different web pages
..7. And with that navbar is done

5. Now, let's make the header section of our page

```
<header id="header">
      <div class="container">
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
