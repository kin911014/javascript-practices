// url 다루기

var url = 'http://localhost:8080/mysite3?n=김동은';
// 1. escape (x) - URL을 전부 encoding시킨다. - deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURL(o) : parameter만 encoding시킨다.
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent
var url4 = encodeURIComponent(url);
console.log(url4);

// 4. encodeURLComponent 사용 예
var url = "http://localhost:8080/mysite03"
var queryString = "no"

var o = {
    no:10, 
    name:'kim', 
    mail:'kin911014@gmail.com' 
}

var queryString = "no"
for(property in o){
    queryString +=(property + "=" + encodeURIComponent(o[property]));
}

console.log(queryString);

var url5 = url + "?" + queryString;
console.log(url5);