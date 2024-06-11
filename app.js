var  haider = document.getElementById('haider')
var ppp = document.getElementById('ppp')
var ohh = document.getElementById('ohh')
var cvx = document.getElementById('cvx')

ppp.addEventListener('mouseover' , function () {
    haider.src = ppp.src
})
ohh.addEventListener('mouseover' , function () {
    haider.src = ohh.src
})
cvx.addEventListener('mouseover' , function () {
    haider.src = cvx.src
})


ppp.addEventListener('mouseout', function () {
    haider.src ="cat2.jpg"
    
})

ohh.addEventListener('mouseout' , function () {
    haider.src = "cat2.jpg"
})

cvx.addEventListener('mouseout' , function () {
    
    haider.src = "cat2.jpg"
})