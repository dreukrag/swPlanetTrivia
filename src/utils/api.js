export function getPlanetList() {
    var list = [];
    var count = 0;
    function getList(url) {
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                list = list.concat(responseJson.results);
                count += 1;
                if (count > 10) { throw new Error("too many callbacks") }
                return responseJson;
            }).then((responseJson) => {
                if (responseJson.next != null) {
                    return getList(responseJson.next)
                }
                return list;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return getList('https://swapi.co/api/planets/');
}

export function getPlanet(n){
    return fetch('https://swapi.co/api/planets/' + n)
}

export function getPlanetsFromFilm() {
    return getPlanetList().then((rsp) => {
        var listFilm = [];
        rsp.forEach(function (element) {
            if (element.films.length > 0) {
                listFilm.push(element);
            }
        }, this);
        return listFilm;
    });
}



