// Write your code here!
const removeMain=document.querySelector('#main')
removeMain.remove()
console.log(removeMain);

const newHeader=document.createElement('h1')
newHeader.id='victory'
newHeader.innerHTML="Andy is the champion"
document.body.append(newHeader)
console.log(newHeader)