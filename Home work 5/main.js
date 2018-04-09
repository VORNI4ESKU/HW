; (function () {
    var selectValue;
    var dateFrom;
    var dateTo;
    var adventureSelector = document.getElementById("adventure");
    for (let index = 0; index < data.genres.length; index++) {
        var option = document.createElement("option");
        option.value = data.genres[index];
        option.innerText = data.genres[index];
        adventureSelector.appendChild(option);
    }
    filter();

    document.getElementById("find").onclick = filter;
    
    function filter() {
        var movies = data.movies;

        var e = document.getElementById("adventure");
        selectValue = e.options[e.selectedIndex].value;
        dateFrom = document.getElementById("from").value;
        dateTo = document.getElementById("to").value;


        movies = movies.filter(filterByGenres);
        movies = movies.filter(filterByDate);

        var filmTable = document.querySelector("#filmTable tbody")
        filmTable.innerHTML = "";
        for (let index = 0; index < movies.length; index++) {
            var tr = document.createElement("tr");

            var td = document.createElement("td");
            td.innerText = movies[index].title;
            tr.appendChild(td);

            td = document.createElement("td");
            td.innerText = movies[index].genres.join(", ");
            tr.appendChild(td);

            td = document.createElement("td");
            td.innerText = movies[index].year;
            tr.appendChild(td);

            filmTable.appendChild(tr);
        }

        function filterByGenres(item) { 
            if (!selectValue)
                return true;
            
            return item.genres.indexOf(selectValue)>0;
        }
        function filterByDate(item) {
            var filterValue = true;
            if(dateFrom) {
                filterValue = item.year >= dateFrom
            }
            if(filterValue && dateTo) {
                filterValue = item.year <= dateTo
            }
            return filterValue;
        }
    }
})()



