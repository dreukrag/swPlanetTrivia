export function getPlanets() {
    return fetch('https://swapi.co/api/planets/')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.count;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function getPlanet(n) {
    return fetch('https://swapi.co/api/planets/' + n)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}

export function getPlanetList() {
    var list = [];
    var count = 0;
    function getList(url) {
       return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                list.push(responseJson.results);
                count += 1;
                if (count > 10) { throw new Error("too many callbacks") }
                return responseJson;
            }).then((responseJson)=>{
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
    list.forEach((v,k)=>{
        console.log(v);
    })
    return list;

}



