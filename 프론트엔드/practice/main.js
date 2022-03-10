let items = document.querySelectorAll('.item');


let firstText = '';

function change() {
  items.forEach(function(item, index) {
    setTimeout(()=> {
      if(index == 0) {
        firstText = items[0].textContent;
      }
      if (index + 1 >= 7) {
        item.textContent = firstText;
      }
      else {
        item.textContent = items[index+1].textContent;
      }
    }, 100 * index)
  })
  
  items.forEach(function(item, index) {
    setTimeout(()=> {
      if (index + 1 >= 7) {
        item.style.backgroundColor = `${item.textContent}`;
      }
      else {
        item.style.backgroundColor = `${item.textContent}`;
      }
    }, 700 + 100 * index)
  })
}
