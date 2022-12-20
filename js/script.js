// Variables
const ratingStarSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA8CAYAAAA+CQlPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTItMjBUMTI6NTc6MTcrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEyLTIwVDEyOjU4OjE5KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEyLTIwVDEyOjU4OjE5KzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzc0N2FkOC0wZGFiLTQzZWMtOTYwNS1lNDVlNmMyNGU2NDAiIHhtcE1NOkRvY3VtZW50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";
let fetchedArray;
let elementsCount = 10;
let listItems = [];
let dragStartIndex;
// Event listeners
document.getElementById('selector').addEventListener('change',sortList);
document.getElementById('countSelector').addEventListener('change',updElementsCount);
function addEventListeners() {
	const draggables = document.querySelectorAll('.draggable');
	const dragListItems = document.querySelectorAll('.draggable-list li');
  
	draggables.forEach(draggable => {
	  draggable.addEventListener('dragstart', dragStart);
	});
  
	dragListItems.forEach(item => {
	  item.addEventListener('dragover', dragOver);
	  item.addEventListener('drop', dragDrop);
	  item.addEventListener('dragenter', dragEnter);
	  item.addEventListener('dragleave', dragLeave);
	});
}
function removeEventListeners() {
	const draggables = document.querySelectorAll('.draggable');
	const dragListItems = document.querySelectorAll('.draggable-list li');
  
	draggables.forEach(draggable => {
	  draggable.removeEventListener('dragstart', dragStart);
	});
  
	dragListItems.forEach(item => {
	  item.removeEventListener('dragover', dragOver);
	  item.removeEventListener('drop', dragDrop);
	  item.removeEventListener('dragenter', dragEnter);
	  item.removeEventListener('dragleave', dragLeave);
	});
}
// D&D events
function dragStart() {
	dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
	this.classList.add('over');
}

function dragLeave() {
	this.classList.remove('over');
}

function dragOver(e) {
	e.preventDefault();
}

function dragDrop() {
	const dragEndIndex = +this.getAttribute('data-index');
	swapItems(dragStartIndex, dragEndIndex);
	this.classList.remove('over');
}
function swapItems(fromIndex, toIndex) {
	const itemOne = listItems[fromIndex].querySelector('.draggable');
	const itemTwo = listItems[toIndex].querySelector('.draggable');
	console.log(listItems[fromIndex]);
	listItems[fromIndex].appendChild(itemTwo);
	listItems[toIndex].appendChild(itemOne);
}

// Get Data
fetch(`https://dummyjson.com/products`)
.then(function(response){
	return response.json()
})
.then((data) => {
	fetchedArray = data.products;
	sortList();
})
.catch((err) => {
	console.log(`Error fetching: ${err}`)
});

const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

// Elements count
function updElementsCount(){
	elementsCount = document.getElementById('countSelector').value;
	document.documentElement.style.setProperty('--count', elementsCount);
	sortList();
}
// Sort
function sortList(){
	const sortValue = document.getElementById('selector').value;
	let array = JSON.parse(JSON.stringify(fetchedArray));
	if(sortValue === "title"||sortValue === "brand"||sortValue === "description"){
		array.sort((a, b) => a[sortValue].localeCompare(b[sortValue]))
	}
	else{
		array.sort((a, b)=>{return a[sortValue] - b[sortValue]});
	}
	createList(array.slice(0,elementsCount));
}

// Insert list items into DOM
function createList(list) {
	draggable_list.innerHTML = "";
	listItems = [];
  	list
    .map((item, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);
	  listItem.setAttribute('class','listItem');

      listItem.innerHTML = `
			<span class="number">${index + 1}</span>
			
			<div class="draggable" >
				<div class="infoBlock" draggable="true">
					<div class="image">
						<img src=${item.images[0]} alt="" srcset="">
					</div>
					<div class="titleBlock" >
						<p>${item.brand} ${item.title}</p>
						<p>${item.price}$</p>
					</div>
					<div class="ratingBlock" >
						<img src=${ratingStarSrc} alt="" srcset="">
						<p>${item.rating}</p>
					</div>
				</div>
				<div class="descriptionBlock ${(index+1>elementsCount/2)?"reverse":"normal"}">
					<img src=${item.images[0]} alt="" srcset="">
					<p>Brand: ${item.brand}</p>
					<p>Title: ${item.title}</p>
					<p>Price: ${item.price}$</p>
					<p>Description: ${item.description}</p>
					<p>Rating: ${item.rating}</p>
				</div>
			</div>
      `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
	removeEventListeners();
	addEventListeners();
}



