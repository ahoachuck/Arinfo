// Fetching HTML elements
/// New book inputs
const bookName = $("#bookName");
const bookAuthor = $("#bookAuthor");
const bookRead = $("#bookRead");
const bookSubmit = $("#bookSubmit");
const bookReset = $("#bookReset");

/// Book list
const bookListDiv = $("#bookListDiv");
const bookList = $("#bookList");
const filterOption = $("#filterOption");
const filterOptions = $("#filterOptions");
const filterInput = $("#filterInput");
const bookSearch = $("#bookSearch");
const baseListElement = $("#baseListElement");
const baseEmptyListElement = $("#baseEmptyListElement");
const baseQueryListElement = $("#baseQueryListElement");

// Script variable declarations
/// {
///     name: "bookName",
///     author: "bookAuthor",
///     read: false
/// }
let bookArray = []; // Holds all of our books
let lastQuery = {
    query: null, // Actual search
    type: null // Type (Author, Title)
}

// Deletes itself... (callback for iteration)
function selfDeleteUnidentified() {
    // Don't get rid of our base elements!!
    // (we check if the element got an id or not, since clones won't have ids)

    let self = $(this);
    if (self.attr('id') == undefined) {
        self.remove();
    }
}

// Updates our HTML list
function renderList(lookupQuery = lastQuery.query, lookupType = lastQuery.type) {
    console.log(`lookupQuery: ${lookupQuery} | lookupType: ${lookupType}`);

    // Determine if a query is present
    const hasQuery = !((lookupQuery === null) || (lookupQuery.length <= 0));

    // Remember the last query so it doesn't reset
    lastQuery.query = lookupQuery;
    lastQuery.type = lookupType;

    // Find the necessary elements for query display
    const lookupDisplayName = baseQueryListElement.find("#lookupDisplayName"); // query
    const lookupDisplayCount = baseQueryListElement.find("#lookupDisplayCount"); // results

    // Query our array
    let lookupArray = [];
    if (hasQuery) {
        // For each book
        bookArray.forEach(book => {
            // If it includes 'lookupQuery' inside book[lookupType], we get it
            const target = book[lookupType].toLowerCase();
            if (target.includes(lookupQuery.toLowerCase()))
                lookupArray.push(book);
        });
    } else {
        lookupArray = bookArray; // Get everything
    }

    // Determine if we should show baseQueryListElement
    if (lookupArray.length > 0 && hasQuery) {
        baseQueryListElement.removeClass("d-none");
    }
    else {
        baseQueryListElement.addClass("d-none");
    }

    // Clear our list
    bookList.children("li").each(selfDeleteUnidentified);

    // Check if the array is empty
    if (lookupArray.length <= 0) {
        // We can show our empty list element
        baseEmptyListElement.removeClass("d-none");
        return;
    }

    // Hide base empty list element
    baseEmptyListElement.addClass("d-none");

    // For each entry of our array    
    lookupArray.forEach(book => {
        // Clone the base element
        let newElem = baseListElement.clone();

        // Remove its id (selfDeleteUnidentified will remove unidentified elements only)
        newElem.removeAttr('id');

        // Set the name and the author of the book
        const bookNameDisplay = newElem.find("#bookNameDisplay");
        const bookAuthorDisplay = newElem.find("#bookAuthorDisplay");
        bookNameDisplay.text(book.name);
        bookAuthorDisplay.text(book.author);

        // Remove display none
        newElem.removeClass("d-none");

        // Show specific decoration when book is marked as read
        if (book.read) {
            bookNameDisplay.css("text-decoration", "line-through")
        }

        // Connect the buttons
        const deleteBtn = newElem.find(".btn-danger");
        const readBtn = newElem.find(".btn-primary");

        deleteBtn.click(() => { // On delete
            // Find the index of our book in the array
            var idx = bookArray.indexOf(book);
            if (idx === -1) return;

            // Get rid of it
            bookArray.splice(idx, 1);

            // Render the list all over again
            renderList();
        });

        const onRead = () => { // On read
            // Toggle the read property
            book.read = !book.read;

            // Render the list all over again
            renderList();
        };

        readBtn.click(onRead); // Toggle read on btn click
        bookNameDisplay.dblclick(onRead); // Toggle read on title double click

        // Append our new element to the bookList
        bookList.append(newElem);
    });

    // Update lookup text
    lookupDisplayName.text(lookupQuery);
    lookupDisplayCount.text(lookupArray.length);  
}

// Register a new filter (callback for iteration)
function registerFilter() {
    const self = $(this).first(); // Actual filter is nested into <li>
    self.click(() => {
        filterOption.text(self.text());
        filterOption.data("bookFilter", self.data("bookFilter"));
    });
}

// Add a new book (and update our list!)
function addBook(name = "Untitled Book", author = "Unknown Author", read = false) {
    // Push it to our array
    bookArray.push({
        name: name,
        author: author,
        read: read
    });

    // Render the updated list
    renderList(lastQuery.query, lastQuery.type);
}

// On new book submit
bookSubmit.click(() => {
    addBook(bookName.val(), bookAuthor.val(), bookRead.prop("checked"));
    return false; // prevent page reload
});

// On search
bookSearch.click(() => {
    renderList(filterInput.val(), filterOption.data("bookFilter"));
    return false; // prevent page reload again
});

// Register our different lookup filters
filterOptions.children("li").each(registerFilter);