const allskekton = document.querySelectorAll(".bg-preload")
const removeitem = document.querySelector('.remove')
removeitem.classList.remove('mb-4')
function load(){
allskekton.forEach((item)=>{
    removeitem.classList.add('mb-4')
    console.log(removeitem)
item.classList.remove('bg-preload')

})
}

setTimeout(() => {
    load()
}, 3000);
