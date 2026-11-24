let elsoSzamjegySzovege = "";
let masodikSzamjegySzovege  = "";
let muvelet = "";
const szamGombElemek gete
szamGombElemek[0].addEventListener("click", szamKatt)

szamGombElemek[1].addEventListener("click", szamKatt)

szamGombElemek[2].addEventListener("click", szamKatt)

szamGombElemek[3].addEventListener("click", szamKatt)

szamGombElemek[4].addEventListener("click", szamKatt)

szamGombElemek[5].addEventListener("click", szamKatt)

szamGombElemek[6].addEventListener("click", szamKatt)

szamGombElemek[7].addEventListener("click", szamKatt)

szamGombElemek[8].addEventListener("click", szamKatt)

szamGombElemek[9].addEventListener("click", szamKatt)

function szamKatt(event){
    console.log(event.target.id)
    inputElem.value += event.target.id
}