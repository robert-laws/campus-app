# ColdFusion

Useful Resources:

- [cfscript.me](https://cfscript.me)
- [cffiddle](https://cffiddle.org)
- [cfdocs](https://cfdocs.org)
- [Learn CF in a Week](http://www.learncfinaweek.com)
- [Adobe Cold Fusion](https://helpx.adobe.com/support/coldfusion.html)
- [ColdFusion Functions by Category](https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-functions/functions-by-category.html)

### Application.cfc

Application.cfc file governs the settings for an application. It's possible to add Application.cfc files to subdirectories of a webroot to create distinct applications at those locations.

```cfml
component
{
  this.name = "myColdFusionApp";
  this.datasource = "applicationDatabase";
  this.applicationTimeout = CreateTimeSpan(0, 5, 0, 0);

  this.sessionManagement = true;
  this.sessionTimeout = CreateTimeSpan(0, 0, 30, 0);
}
```

# Adobe Certified Professional: Adobe ColdFusion

## Introduction to the Course

Getting the exercise files
Downloading and Installing CommandBox
Installing and configuring VS code for ColdFusion

## Introduction to ColdFusion

#### What is ColdFusion

- application server and coding language

#### Printing data on the screen

```cfml
<cfset userName="Bob">
<cfoutput>
  Hello there, #userName#!
</cfoutput>
```

#### Discovering the cfscript syntax

```cfml
<cfscript>
  username = "Hal";
  writeOutput("Hello, #username#!");
</cfscript>
```

#### Commenting code in tag syntax

```cfml
<!--#### <cfset score = 34> --->
<cfset title = "manager">
```

#### Commenting code in script syntax

```cfml
<cfscript>
  // score = 34;
  items = ["pen", "pencil", "notebook", "eraser", "paper"];

  /*
  for (item in items) {
    writeOutput(items[item]);
  }
  */

</cfscript>
```

#### Using `<cfdump>`and `writedump()`

```cfml
<cfset items=["pen", "pencil", "notebook", "eraser", "paper"]>
<cfdump var="#items#" abort=true label="Array of Items">
```

```cfml
<cfscript>
employee = { name: "Bob", age: 34, salary: 50000 };
writeDump(employee);
writeDump(var = employee, label = "Employee Information");
</cfscript>
```

#### Touring the ColdFusion administrator

## Variables and Datatypes

Variables are used to store different data types for use in coldfusion applications. Major data types are:

- String
- Integers
- Booleans
- Arrays
- Structures
- Query
- Lists (String)
- Dates (String)

#### Creating simple variables

```cfml
<cfset name = "Bob">
<cfset age = 34>

<cfscript>
  isEmployed = false;
  items = ["pen", "pencil", "notebook", "eraser", "paper"];

  writeOutput(ITEMS[1]);
</cfscript>
```

#### CFML is weakly typed

```cfml
location = "New York City";
location = 10007;
```

#### Creating Lists

Lists are technically strings, but can be handled in special ways by CF using List methods.

```cfml
people = "Bob, Ned, Sally, Joe";
writeOutput(people);

ListAppend(people, "Steve", "|");
morePeople = people.listAppend("Steve", "%");
evenMorePeople = listAppend(morePeople, "Melvin", "|");
writeOutput(evenMorePeople);
```

#### Discovering the ColdFusion functions

The ColdFusion documentation has [extensive documentation on functions](https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-functions/functions-by-category.html) available organized by category.

#### Understanding the list delimiter

```cfml
people = "Bob, Ned, Sally, Joe, Mike";
writeOutput(people.listLen()); // 5
```

#### Lists with Empty items

```cfml
people = "Bob, Ned, Sally, Joe,,,James";
writeOutput(listGetAt(people, 5, ",", false)); // James
```

#### Finding items in lists

```cfml
people = "Bob Cobb,Ned Nail,Sally Soap,Jim Jupe,Mel Mope";
writeOutput(listFind(people, "Bob Cobb")); // 1
writeOutput(listContains(people, "Mel")); // 5
writeOutput(listContainsNoCase(people, "nail")); // 2
writeOutput(people.listContainsNoCase("bob")); // 1
```

#### Creating arrays

```cfml
<cfset people = ["Bob", "Ned", "Sally", "Joe"]>

<cfscript>
users = ArrayNew(1); // new array with one dimension
users[1] = "Bob";
users[2] = "Ned";
users[3] = "Sally";
arrayAppend(users, "Joe");
writeDump(users);
</cfscript>
```

```cfml
users = ["Bob", "Ned", "Sally", "Joe"];
users.append("Melvin");
writeDump(users);
```

#### Empty items in arrays

```cfml
items = ArrayNew(1);
items[1] = "pen";
items[2] = "pencil";
items[3] = "notebook";
items[6] = "eraser"; // will produce two undefined elements at position 4 and 5
writeDump(items);
```

#### Finding items in an array

```cfml
items = ["pen", "pencil", "notebook", "eraser", "chalkboard", "paper"];
writeOutput(ArrayFirst(items)); // pen
writeOutput(items.first()); // pen

writeOutput(ArrayLast(items)); // paper
writeOutput(items.last()); // paper

writeOutput(ArrayFind(items, "eraser")); // 4
writeOutput(items.find("eraser")); // 4

indexPosition = ArrayFind(items, "chalk"); // 0
indexPosition = ArrayFindNoCase(items, "chalkBOARD"); // 5

indexPosition = items.find("chalk"); // 0
indexPosition = items.findNoCase("chalkBOARD"); // 5

isFound = ArrayContains(items, "chalk"); // false
isFound = ArrayContainsNoCase(items, "chalkBOARD"); // true
```

#### Merging arrays

```cfml
items = ["pen", "pencil", "notebook", "eraser", "chalkboard", "paper"];
stationary = ["envelope", "letter paper", "index cards"];

items.append(stationary);
writeDump(items); // merges the second array as nested array

items.append(stationary, true);
writeDump(items); // merges the second array as one flat array
```

#### Multi-dimensional arrays

```cfml
employees = ArrayNew(2);

employees[1][1] = "Bob";
employees[1][2] = "Cobb";
employees[1][3] = "cobb@net.com";

employees[2][1] = "Ned";
employees[2][2] = "Nail";
employees[2][3] = "nail@net.com";

writeDump(employees);
```

#### Exploring Array functions

```cfml
items = ["pen", "pencil", "notebook", "eraser", "chalkboard", "paper"];

items.append("envelope"); // appends an element to the end of the array
items.prepend("cards"); // prepends an element to the beginning of the array
items.insertAt(3, "paperclips"); // inserts an element at the specified position
items.delete("notebook"); // deletes an element from the array
items.deleteNoCase("PAPER"); // deletes an element from the array
items.deleteAt(items, 5); // deletes an element from the array at the specified position
items.clear(); // clears the array

writeDump(items);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
writeOutput(numbers.avg()); // 5.5
writeOutput(numbers.sum()); // 55
writeOutput(numbers.max()); // 10
writeOutput(numbers.min()); // 1

// arrays that contain numbers as strings are converted to numbers automatically

itemsList = items.toList('%');
writeDump(itemsList);

newItems = itemsList.listToArray('%');
writeDump(newItems);
```

#### Creating structures

```cfml
team = {
  leader: "Bob Cobb",
  manager: "Ned Nail",
  technician: "Sally Soap",
  accountant: "Jim Jupe"
}

team.assistant = "Mel Mope";
writeDump(team);
```

#### About key names in structs

```cfml
person = StructNew();
person.name = "Bob Cobb";
person.age = 35;
person.email = "cobb@net.com";
person["date of birth"] = "March 23, 1985";
writeDump(person);

writeOutput(PERSON.NAME); // Bob Cobb
writeOutput(PERSON["DATE OF BIRTH"]); // March 23, 1985
```

#### Finding items in structures

```cfml
team = {
  leader: "Bob Cobb",
  manager: "Ned Nail",
  technician: "Sally Soap",
  accountant: "Jim Jupe"
}

writeOutput(team.keyExists("leader")); // true
writeOutput(team.keyExists("helper")); // false

writeOutput(StructKeyExists(team, "leader")); // true
writeDump(team.keyExists("manager")); // true

writeDump(team.findKey("manager")); // returns array with a struct as the first element
writeDump(team.findKey("manager"))[1].value; // returns the value for the key name

writeDump(team.findValue("Ned Nail")); // returns array with a struct as the first element
writeDump(team.findValue("Ned Nail")[1].key); // returns the key name for the value
```

#### Merging and copying structures

```cfml
company = {
  name: "Acme Inc.",
  ceo: "Bob Cobb"
};

address = {
  street: "123 Main St.",
  city: "Anytown",
  state: "CA"
};

company.append(address);
writeDump(company);

address.state = "NY";
writeDump(company);

newCompany = {
  name: "Acme Inc.",
  ceo: "Bob Cobb"
};

copyOfNewCompany = newCompany.copy();
writeDump(copyOfNewCompany);

newCompany.ceo = "Hal Hope";
writeDump(newCompany);
writeDump(copyOfNewCompany);
```

#### Shallow Copy vs Deep Copy

```cfml
company = {
  name: "Acme Inc.",
  ceo: "Bob Cobb",
  address = {
    street: "123 Main St.",
    city: "Anytown",
    state: "CA"
  }
}

company2 = company.copy(); // used for shallow copies (1 level deep)
company2 = company.duplicate(); // used for deep copy - will create a unique version of the original

company.address.state = "NY"; // structures inside of structures will create references for copies, duplicating the data

writeDump(company);
writeDump(company2);
```

#### Null Support in ColdFusion

```cfml
address = null; // not recognized by coldfusion, produces an error

// null support not available by default, has to be enabled in server settings in the CF Administrator

writeDump(isNull(address)); // true
```

#### Caching variables

## Main ColdFusion Constructs

ColdFusion constructs include decision making and looping logic. The main decision making logic include if and switch statements.

#### Simple if statement in script syntax

```cfml
name = "Bob Cobb";
age = 34;

if(isDefined("name")) {
  writeOutput("Hello, #name#.");
}

if(age > 30) {
  writeOutput("You are old enough to vote.");
} else {
  writeOutput("You are not old enough to vote.");
}
```

#### Nested ifs

```cfml
age = 34;
isValid = true;

if(age > 30) {
  writeOutput("You are old enough to vote.");
  if(isValid == true) {
    writeOutput("You are also valid.");
  }
} else {
  writeOutput("You are not old enough to vote.");
}
```

#### Simple if statement in tag syntax

<cfset manager = "Hal Hope">
<cfoutput>
  <cfif manager EQ "Hal Hope">
    <p>Howdy, #manager#.</p>
  <cfelseif manager EQ "Unknown">
    <p>Who are you?</p>
  <cfelse>
    <p>Howdy, Stranger.</p>
  </cfif>
</cfoutput>

#### Comparison operators in the tag syntax

- comparison operators in tag syntax
- EQ = equal
- NEQ = not equal
- GT = greater than
- GTE = greater than or equal to
- LT = less than
- LTE = less than or equal to
- AND = logical and
- OR = logical or

#### The Ternary operator

```cfml
age = 23;

result = age > 18 ? "You are old enough to vote." : "You are not old enough to vote.";
writeOutput(result);

name = "Joe";
userName = name ?: "New User";

writeOutput(userName); // Joe
```

#### The switch case construct

```cfml
group = "red";

switch(group) {
  case "red":
    writeOutput("You are in the red group.");
    break;
  case "blue":
    writeOutput("You are in the blue group.");
    break;
  case "green":
    writeOutput("You are in the green group.");
    break;
  default:
    writeOutput("You are in no group.");
    break;
}
```

#### The break keyword in a switch case

Bread statements in switch cases will end execution of the code and exit the switch statement.

```cfml
group = "red";

switch(group) {
  case "red":
    writeOutput("You are in the red group.");
    break;
  case "blue":
    writeOutput("You are in the blue group.");
    break;
  case "green":
    writeOutput("You are in the green group.");
    break;
  case "multicolor":
  case "rainbow":
  case "all":
    writeOutput("You are in the multicolor group.");
    writeOutput("Please see the coordinator.");
    break;
  default:
    writeOutput("You are in no group.");
    break;
}
```

#### If statements in switch case

```cfml
group = "red";
age = 23;

switch(group) {
  case "red":
    writeOutput("You are in the red group.");
    if(age > 18) {
      writeOutput("You can vote in the red group.");
    }
    break;
  case "blue":
    writeOutput("You are in the blue group.");
    break;
  default:
    writeOutput("You are in no group.");
    break;
}
```

#### Reviewing the for loop

The main types of loops available in CFML are:

- For loop
- While loop
- Do ... while loop
- For ... in loop

```cfml
for(i = 0; i < 10; i++) {
  writeOutput("i = " & i);
}
```

#### Reviewing the while loop and the do-while loops

```cfml
i = 10;

while(i > 0) {
  writeOutput("<p>i is #i#...</p>");
  i--;
}

j = 0;

do {
  writeOutput("<p>j is #j#...</p>");
  j++;
}
while(j < 5);
```

#### Reviewing the For In loop

```cfml
fruitBowl = ["apple", "banana", "orange", "pear", "strawberry"];

for (fruit in fruitBowl) {
  writeOutput("<p>#fruit# is in the fruit bowl.</p>");
}
```

#### Looping over lists

```cfml
listOfLocations = "New York,Baltimore,Boston,Chicago,Dallas,Houston,Los Angeles,Miami,New Orleans,Philadelphia,Phoenix,San Antonio,San Diego,San Francisco,Seattle,Washington DC";

for(city in listOfLocations) {
  writeOutput("<p>#city# is a great city.</p>");
}

<cfloop list="#listOfLocations#" index="city">
    <p>#city#</p>
</cfloop>

items = "apple,banana,orange,pear,strawberry";
items.listEach(function(element, index, list) {
  writeOutput("<p>#index#: #element# is in the fruit bowl.</p>");
});
```

#### Looping over arrays

```cfml
fruit = ["apple", "banana", "orange", "pear", "strawberry"];

<cfloop from="1" to="#ArrayLen(fruit)#" index="i">
  <p>#fruit[i]#</p>
</cfloop>

fruit.each(function(element, index, array) {
  writeOutput("<p>#index#: #element# is in the fruit bowl.</p>");
});
```

#### Looping over structures

```cfml
employee = {
  "firstName": "Bob",
  "lastName": "Cobb",
  "age": 34,
  "isValid": true
};

for(key in employee) {
  writeOutput("<p>#key#: #employee[key]#</p>");
}

employee.each(function(key, value) {
  writeOutput("<p>Key is #key#: Value is #value#</p>");
});
```

#### Break and continue

```cfml
items = ["apple", "banana", "orange", "pear", "strawberry", "watermelon", "grape", "peach", "pineapple", "kiwi"];

for(i = 1; i <= ArrayLen(items); i++) {
  if(i == 8) {
    break; // break out of the loop
  }
  if(items[i] == "pear") {
    continue; // skip based on the logic and continue running the loop
  }
  writeOutput("<p>#i#: #items[i]#</p>");
}
```

## ColdFusion Functions

Function are used for writing reusable code and can accept arguments.

#### Creating a simple function

```cfml
function greeting() {
  writeOutput("<p>Howdy!</p>");
}
```

#### Function arguments

```cfml
function greeting(myName) {
  writeOutput("<p>Howdy, #arguments.myName#!</p>");
}
```

#### Required and optional arguments

```cfml
function average(required numberOne, required numberTwo, mathType = "Average") {

  var average = (arguments.numberOne + arguments.numberTwo) / 2;
  return average;
}

writeOutput(average(20, 50));
```

#### Type checking the arguments

```cfml
function average(required numeric numberOne, required numeric numberTwo, string mathType = "Average") {

  if(mathType == "Average") {
    var average = (arguments.numberOne + arguments.numberTwo) / 2;
  }
  return average;
}

writeOutput(average(20, 50));
```

#### Passing arguments into functions

```cfml
function average(required numeric numberOne, required numeric numberTwo, required numeric numberThree) {
  var average = (arguments.numberOne + arguments.numberTwo) / 2;
  return average;
}

myNumbers = {
  numberOne: 20,
  numberTwo: 50,
  numberThree: 80
};

writeOutput(average(argumentCollection = myNumbers));
```

#### Returning data from a function

```cfml
numeric function add(required numeric numberOne, required numeric numberTwo) {
  return arguments.numberOne + arguments.numberTwo;
}

void function greeting(required string myName) {
  writeOutput("<p>Howdy, #arguments.myName#!</p>");
}

writeOutput(add(20, 50));
greeting("Bob");
```

#### Creating functions with tags

```cfml
<cffunction name="getAverage" returntype="numeric">
  <cfargument name="numberOne" type="numeric" required="true" />
  <cfargument name="numberTwo" type="numeric" required="true" />

  <cfset var average = (arguments.numberOne + arguments.numberTwo) / 2 />

  <cfreturn average />
</cffunction>

<cfoutput>
  <p>The average is #getAverage(34, 64)#.</p>
</cfoutput>
```

## Scopes

Scopes define where variables are available. They exist as structures. Scopes can either be for short-term use or persistent and available over multiple requests, sessions, applications, and more. They are helpful in cases of performance, security, and convenience in app development.

#### About scopes in general

There are approximately 20 different types of scopes in ColdFusion.

#### The default variables scope

Using the `variables` scope is recommended for performance reasons and to avoid conflicts with variables using the same name in other scopes.

#### The var scope of a function

Using the `var` keyword in a function will scope it only to the function and not outside of the function. The concept of encapsulation stresses to keep variables scoped only as needed.

```cfml
variables.firstName = "Bob";
variables.lastName = "Cobb";

string function greet() {
  var greeting = "Howdy"; // this variable is scoped to the function
  var firstName = "Kalvin";

  return "#greeting#, #local.firstName# #variables.lastName#";
}
```

#### The CGI Scope

CGI scope is data from the web server and is read-only. Some useful information includes:

- HTTP_USER_AGENT
- REQUEST_METHOD

#### The Application.cfc file

ColdFusion looks for a `Application.cfc` file when it initializes an application. Multiple Application.cfc files can be used to establish distinct applications within a single file system. Application.cfc can be in a parent folder and only one Application.cfc file is executed per application.

#### The older Application.cfm file

Before CF7, Application.cfm file was used, but it is deprecated and not recommended for modern development. If an Application.cfc file and Application.cfm are both in the file system, CF will only use the .cfc file.

#### The Application scope

ColdFusion has several persistent scopes that are available between pages and requests. The application scope is named using the `this.name` assignment. Each application should have a unique name to avoid conflicts. It's populated when the first request is made to the application server and is removed at the default or specified application timeout.

#### The Session scope

Session scope is available only to a specific user. Each user can have unique values that are stored per session.

#### Session Identifiers and the Cookie scope

The session values `cfid` and `cftoken` are important and are used with the session and cookie scopes for identification. If CF finds a match, it can resume an existing session. The cookie scope can be used to store data too, which are available through the cookie scope.

#### The Server Scope

The server scope is available to all users and across all applications. This provides information about the ColdFusion server, its operating system, and features available in ColdFusion. It's possible to write to the server scope and access this data in other applications.

#### Locking

ColdFusion is a multithreaded application - 10 requests at the same time, all 10 requests are processed at the same time. There are circumstances where multiple users could attempt to change data in the application scope at the same time, causing a conflict. To avoid this, the application scope can be locked when a request is made. A user who attempts to update a value that is locked will have to wait until the lock is released. This is called a race condition.

Two options are available:

- type="exclusive" - used when writing is needed
- type="read only" - used when only read access to a shared variable is needed

```cfml
lock scope="Application" timeout="10" type="Exclusive"
{
  application.totalTicketsSold = application.totalTicketsSold + myNewTicketsOrder;
}
```

Locks are recommended only when a race condition is possible. Locking can also be used in session, server, or application variables.

using `cfthread` also is a situation where locking is helpful.

## Reusing Code

ColdFusion offers several options for reusing code.

#### Using simple <cfinclude>

Provides a way to bring in CF pages

```cfml
<cfinclude template="inc/header.cfm" />

include template="inc/footer.cfm"
```

#### <cfinclude> and the variables scope

Variables created in one CF page can be used in another CF page when imported. These variable are visible through the variables scope.

#### Use cases for cfincludes

When using constants in an application, use of a CF includes can be helpful. The constants can be created in an include and used in another coldfusion page. Functions can also be accessed when included from another CF file, which can be useful when reusing and organizing code.

#### Using cfinclude with functions

Be careful of the names used in functions since they can be overwritten when a function name is duplicated.

#### When cfinclude is not a good idea

CF includes are not useful when multiple cf files are nested and makes the code difficult to follow and maintain.

#### Custom tags with <cfimport>

In situations where pages involve some logic and processing, cfimport can be a better solution than cfinclude. There are multiple ways to import a custom tag file.

```cfml
<cfimport taglib="myCustomTags" prefix="mct">

<mct:header>
<main>
  Content
</main>
<mcf:footer>
```

#### Opening and closing custom tags

Custom tags include support for opening and closing tags, which will run the tag body both when the tag is opened and when it is closed. To address this behavior, it's possible to manage the tag behavior using the `thisTag` scope.

```cfml
<cfif thisTag.executionMode EQ "start">
  <p>Tag Start</p>
<cfelse>
  <p>Tag End</p>
</cfif>
```

This can also be done in cfscript.

```cfml
if(thisTag.executionMode == "start") {
  writeOutput(attributes.greeting ?: "Welcome...");
  exit "exittemplate";
}

if(thisTag.executionMode == "end") {
  writeOutput("goodbye");
  exit "exittag";
}
```

#### Passing attributes to custom tags

Custom tags provide support for passing data or attributes to the tag caller.

```cfml
<mct:header pageTitle="Welcome Page">

<cfparam name="attributes.pageTitle" default="Website Page Title" />
<title>#attributes.pageTitle#</title>
```

#### The request scope

In custom tags, the variable scope is not shared. In this situation, the request scope is a good option since it's shared among all pages in an application. It's automatically created at the beginning of a request and disposed at the end of a request.

```cfml
<p>#REQUEST.siteTitle#</p>
```

#### Custom tags with `<cfmodule>`

Another way to use custom tags is with the cfmodule tag.

```cfml
<cfmodule template="myCustomTags/header.cfm" pageTitle="Contact Page">
```

#### Custom tags with the `<cf_>` syntax

If the custom tags path is specified in the CF Server Administration site or the Application.cfc file, the `<cf_>` syntax can be used to import the custom tags.

````cfml
<cf_header pageTitle="User Account Page">

#### The Application Framework

One folder structure can have multiple Application.cfc files to establish distinct applications. The file needs to include specific values for the application and other configurations like folder mappings and datasources.

```cfml
component
{
  this.name = "myBusinessApp";
}
````

#### onApplicationStart() and onSessionStart()

ColdFusion fires several events when an application is started. When an app first starts, it will fire the onApplicationStart() event. When a user starts a session, it will fire the onSessionStart() event.

```cfml
public boolean function onApplicationStart()
{
  application.siteEmailAddress = "site@net.com";
  return true;
}
```

#### Request event handlers

```cfml
function onRequest(string targetPage) {
  try {
    include arguments.targetPage;
  }
  catch(e) {
    writeOutput("Error: " & e.message);
  }
}
```

#### onsessionEnd() and on ApplicationEnd()

onSessionEnd will run when the session has run out and already ended. Two arguments passed can provide information about the expired session.

```cfml
function onSessionEnd(struct SessionScope, struct ApplicationScope) {
  // do something with the copy of the session or application scope
}
```

#### Other event handlers

- onError - function onError(any Exception, string EventName)
- onMissingTemplate - public boolean function onMissingTemplate(required string targetPage)

#### Using cfInclude in Application.cfc

The Application.cfc can use includes to reference files that have the application lifecycle methods.

## Basic Database Operations

#### Creating a DSN

Using the ColdFusion Server Administration site, you can create a DSN. A DSN requires a name, a database driver, server, port, and username and password.

```cfml
this.datasources = {
  AppDataSource = {
    url = "jdbc:derby:#variables.dbPath#;create=true;MaxPooledStatements=100",
    driver = "Apache Derby Embedded"
  }
}
```

#### Using CFquery

```cfml
<cfquery name="allUsers" datasource="AppDataSource">
  SELECT * FROM users;
</cfquery>
```

#### This.datasource in Application.cfc

```cfml
this.datasource = "AppDataSource";
```

```cfml
<cfquery name="allUsers">
  SELECT * FROM users
</cfquery>
```

#### Displaying Query Data

```cfml
<cfoutput>
  <cfloop query="allUsers">
    <p>#FirstName#</p>
  </cfloop>
</cfoutput>

<cfoutput query="users">
  <p>#LastName#</p>
</cfoutput>
```

#### Grouping Query output

```cfml
<cfquery name="allUsers">
  SELECT * FROM users ORDER BY department
</cfquery>

<cfoutput query="allUsers" group="department">
  <p>#department#</p>
  <ul>
    <cfoutput>
      <li>#FirstName#</li>
    </cfoutput>
  </ul>
</cfoutput>
```

#### Creating dynamic queries

```cfml
<cfoutput query="allUsers">
  <p><a href="user-details/#username#">#FirstName# #LastName#</a></p>
</cfoutput>
```

#### Using Query parameters

````cfml
<cfquery name="allUsers" result="allUsersResult">
  SELECT FirstName, LastName
  FROM Users
  WHERE UserID = <cfqueryparam value="#url.userId#" cfsqltype="cf_sql_integer">
</cfquery>

#### Query metadata

Queries have metadata that is included in the query result. This data includes things like record count, column names, and sql expressions used.

#### Using queryexecute()

```cfml
<cfscript>
  sql = "SELECT * FROM users";
  queryUsers = queryexecute(sql);
</cfscript>

<cfoutput query="queryUsers">
  <p>#FirstName#</p>
</cfoutput>
````

```cfml
<cfscript>
  sql = "SELECT * FROM users WHERE UserID = ?";
  params = [{value = url.userId, cfsqltype = "cf_sql_integer"}];
  options = {results = "queryUsersResult"};

  queryDetails = queryExecute(sql, params, options);
</cfscript>

<cfoutput>
  <p>#queryDetails.FirstName#</p>
</cfoutput>
```

```cfml
<cfscript>
  sql = "SELECT * FROM users WHERE UserID = :userID";
  params = { userID = }{value = url.userId, cfsqltype = "cf_sql_integer"}};
  options = {results = "queryUsersResult"};

  queryDetails = queryExecute(sql, params, options);
</cfscript>

<cfoutput>
  <p>#queryDetails.FirstName#</p>
</cfoutput>
```

#### Caching queries

```cfml
<cfquery name="allUsers" result="allUsersResult" cachedwithin="#createTimeSpan(0, 0, 5, 0)#">
  SELECT FirstName, LastName
  FROM Users
</cfquery>

<cfscript>
  sql = "SELECT * FROM users WHERE UserID = :userID";
  params = { userID = }{value = url.userId, cfsqltype = "cf_sql_integer"}};
  options = {results = "queryUsersResult", cachedwithin = "#createTimeSpan(0, 0, 5, 0)#"};

  queryDetails = queryExecute(sql, params, options);
</cfscript>
```

#### Queries of queries

```cfml
<cfquery name="allUsers" result="allUsersResult" cachedwithin="#createTimeSpan(0, 0, 5, 0)#">
  SELECT FirstName, LastName
  FROM Users
</cfquery>

<cfquery name="userDetail" result="queryUserDetail" dbtype="query">
  SELECT *
  FROM allUsers
  WHERE UserID = <cfqueryparam value="#url.userId#" cfsqltype="cf_sql_integer">
</cfquery>
```

#### Using the ValueList() function

Convert data from a query to a list.

```cfml
<cfquery name="allUsers" result="allUsersResult" cachedwithin="#createTimeSpan(0, 0, 5, 0)#">
  SELECT FirstName, LastName
  FROM Users
  ORDER BY LastName
</cfquery>

<cfoutput>
  #valueList(allUsers.LastName, " - ")#
</cfoutput>
```

#### Other tags for creating queries

```cfml
<cfdirectory directory="#expandPath('../')#" action="list" name="queryDirectory" recurse="true" sort="directory asc, name asc" />

<cfldap server="some.ldap.server" action="query" name="ldap" start="">
```

#### Object Oriented Programming in ColdFusion

## Creating Components

```cfml
// Employee.cfc
component
{
  variables.userName = "";
  variables.age = "";
  variables.userId = "";

  public any function init(string userName = '', numeric age = 0) {
    setUserName(arguments.userName);
    setAge(arguments.age);
    setUserId();
    return this;
  }

  // setters (mutators)
  public void function setUserName(string userName) {
    variables.userName = userName;
  }

  public void function setAge(numeric age) {
    variables.age = age;
  }

  public void function setUserId(numeric userId) {
    variables.userId = randRange(1, 100);
  }

  // getters (accessors)
  public string function getUserName() {
    return variables.userName;
  }

  public numeric function getAge() {
    return variables.age;
  }

  public void function displayUserInfo() {
    writeOutput("<p>Name: #getUserName()#</p>");
    writeOutput("<p>Age: #getAge()#</p>");
  }

  private string function getUserId() {
    return variables.userId;
  }
}
```

```cfml
employee = new components.Employee("halhope", 30);
employee.displayUserInfo();
```

#### Methods in components

```cfml
abstract component accessors="true"
{
  property name="vehicleName" type="string";
  property name="age" type="numeric";

  public any function init(string name, numeric age) {
    setVehicleName(name);
    setAge(age);
    return this;
  }

  public void function setAge(numeric age) {
    if(age < 1 || age > 100) {
      throw(message = "Invalid age for vehicle");
    } else {
      variables.age = age;
    }
  }

  public string function displayInfo() {
    return "Vehicle Name: " & getVehicleName() & "; Age: " & getAge();
  }
}
```

#### Creating component instances

```cfml
myCar = new com.Vehicle("Karma Vehicle", 3);
myBicycle = new com.Vehicle("Commuter Vehicle", 4);
```

#### The constructor method

```cfml
component accessors="true"
{
  property name="Provider" type="string";
  property name="Copay" type="numeric";
  property name="Deductable" type="numeric";

  public any function init(provider, copay, deductable) {
    setProvider(provider);
    setCopay(copay);
    setDeductable(deductable);

    return this;
  }

  public void function showPlanDetails() {
    writeOutput("<p>Provider: #getProvider()#</p>");
    writeOutput("<p>Copay: #getCopay()#</p>");
    writeOutput("<p>Deductable: #getDeductable()#</p>");
  }
}
```

#### Understanding components, instances and objects

#### Public and private methods in components

#### Understanding the need for accessors

#### Creating accessors manually

#### Cfproperty and the automatic accessors

#### Overriding the implicit accessors

The implicit accessors will set the values, but don't provide any way to validate incoming data. Providing a setter method with the same name as the generated accessors methods will override the implicit accessors.

```cfml
component accessors="true"
{
  property name="firstName" type="string";
  property name="age" type="numeric";

  public any function init(string firstName, numeric age) {
    setFirstName(arguments.firstName);
    setAge(arguments.age);

    return this;
  }

  public void function setAge(numeric newAge) {
    if(arguments.newAge > 1 || arguments.newAge < 100) {
      throw(message = "age is an invalid number");
      abort;
    } else {
      variables.age = arguments.newAge;
    }
  }
}
```

#### Using the Getter and setter attributes of the `<cfproperty>` tag

```cfml
property name="authorID" type="uuid" getter="true" setter="false"; // allows explicit getter/setter generation per property
```

#### Inheritance : the "is a" relationship

Components that share properties and methods can use inheirtance to share code. The concept is that a component "is a" component.

For example, a bicycle and a car "is a" type of vehicle. They could both make use of vehicle properties they have in common and only possess unique properties in their own components.

#### Using the extends attribute

Bicycle.cfc

```cfml
component extends="Vehicle"
{
  // code for Bicycle goes here
}
```

#### The super keyword

```cfml
// Vehicle.cfc
component accessors="true"
{
  property name="firstName" type="string";
  property name="age" type="numeric";

  public any function init(name, age) {
    setName(arguments.name);
    setAge(arguments.age);

    return this;
  }

  public any function showInfo() {
    writeOutput("<p>Name: #getName()#</p>");
    writeOutput("<p>Age: #getAge()#</p>");
  }
}

// Bicycle.cfc
component accessors="true" extends="Vehicle"
{
  property name="bellType" type="string";

  public any function init(name, age, bellType) {
    super.init(arguments.name, arguments.age);
    setBellType(arguments.bellType);

    return this;
  }
}
```

#### Multi-level inheritance

Multi-level inheritance is possible, but can lead to confusion if overdone.

#### Using Abstract components

#### Inheritance best practices

#### Composition, the "has a" relationship

#### Advanced composition

An employee has a insurance plan. And a department has an employee (or many employees). This is multi-level composition.

#### Using composition and inheritances in an application

#### Understanding the use of interfaces

There are instances when a component has similar properties and methods as a base component, but need to implement the methods in a different way. Interfaces allow flexibility in implementation of a component to allow this behavoir.

#### Creating interfaces

The interface will define rules that will govern the implementation of methods in a component.

```cfml
// ISwimmable.cfc
interface
{
  public void function swim();
}
```

#### Using interfaces

```cfml
component extends="Duck" implements="ISwimmable"
{
  public any function init() {
    super.init();
    return this;
  }

  public void function speak() {
    writeOutput("<p>Quack!</p>");
  }
}
```

#### What interfaces do

Interfaces enforce the implementation of methods within a component. The methods defined in an interface have specific signatures and return types that must be followed to be valid.

#### Using interfaces with multiple components

#### Basic CRUD operations with CFC

#### Building a search functionality

#### Building a model layer in your app

#### Caching component instances in the application scope

Steps for using components

- create an instance and invoke the init() function = done using the new keyword
- use the component instance

Caching objects in the application scope will allow you provide quick access to the object when users go to the website. Singleton methodology.

```cfml
public boolean function onApplicationStart()
{
  application.objMovie = new model.Movie();
  return true;
}
```

#### Caching in the session scope

```cfml
session.info = myDetails;
```

#### Caching a variable

```cfml
cachePut('MyWebsite', mySite);
mySite = cacheGet('MyWebsite');
```

## An introduction TO ORM

HQL - Hibernate Query Language

#### Enabling ColdFusion ORM

- this.ormEnabled = true;
- this.ormSettings.dialect = "Derby";
- this.ormSettings.cfclocation = "./com";

#### Building a simple ORM entity

```cfml
// User.cfc
component persistent="true" table="tUsers"
{
  property name="userID" fieldType="id" generator="native" setter="false";
  property name="firstName" ormType="text";
  property name="lastName" ormType="text";
  property name="email" ormType="text";
}
```

Calling the ORMReload() will get the ORM entities to register with the application.

#### Creating and displaying ORM data

#### Updating and deleting ORM entities

#### Creating relationships

#### Managing ORM sessions

#### Basic Error Handling in ColdFusion

#### Try Catch

#### Throw and rethrow

#### Using OnError

## Forms

#### Introduction to forms, cfforms and data validation

#### The URL and the FORM scopes

- URL scope is a structure transmitted in the url of the request using the fields in the URL via a GET method
- FORM scope is a structure transmitted in the body of the request using the fields in the FORM via a POST method

#### Protecting against CSRF attacks

```cfml
// form-page.cfm
<form name="searchForm" action="search.cfm" method="post">
  <input type="hidden" name="token" value="#csrfGenerateToken(key = "items", forceNew = true)#" />
  <input type="text" name="searchTerm" />
  <input type="submit" value="Search" />
</form>

// search.cfm
validate = csrfVerifyToken(key = "items", token = form.token);

myToken = encodeForHTML(form.token);

if(!validate) {
  location("index.cfm", false);
}
```

#### Logging In users in and out

#### Encoding data

#### Using remote CFC methods

#### Uploading files to ColdFusion

#### Securing file uploads

## PDF and Spreadsheet Support in ColdFusion

#### Using <cfdocument>

#### Creating PDF files from a URL

#### Using <cfdocumentitem> and <cfdocumentsection>

#### Saving PDF files with <cfdocument>

#### PDF best practices

#### Using <cfhtmltopdf>

#### Using <cfpdf>

#### DDX support in ColdFusion

#### Manipulating spreadsheets in ColdFusion

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```
