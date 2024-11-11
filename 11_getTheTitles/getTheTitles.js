const getTheTitles = function(books) {
    return books.reduce((titles, book) => {
        console.log(titles);
        titles.push(book.title);
        return titles;
    }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
