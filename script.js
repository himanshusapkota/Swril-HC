function KhanaSuggest(){
    let khaja=[
        "MOMO",
        "DAL BHAT TARKARI",
        "SEL ROTI",
        "YOMARI",
        " HIMANSHUU'S FAVV BIRIYANIIII"
    ]

    let random=Math.floor(Math.random()*khaja.length)

    document.getElementById("result").innerHTML="You Should Try: <b>" +khaja[random]+"</b>"
}