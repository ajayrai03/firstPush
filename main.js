var form=document.getElementById('addForm');

var itemList=document.getElementById('items');

// form submit event

form.addEventListener('submit',addItem);

// Delete event

itemList.addEventListener('click',removeItem);

// add Item
function addItem(e){
e.preventDefault();

// Get input vale
var newItem=document.getElementById('item').value;

// create new li element

var li=document.createElement('li');

// add class
li.className='list-group-item';

 
// add text node with input value
li.appendChild(document.createTextNode(newItem));

// create delete button element
var deleteBtn=document.createElement('button');
 // add classes to del button

 deleteBtn.className='btn btn-danger btn-sm float-right delete';
 //append text node

 deleteBtn.appendChild(document.createTextNode('X'));
 


 // append button to li

 li.appendChild(deleteBtn);

 // add edit btn
 var editBtn=document.createElement('button');
 editBtn.className='btn btn-danger btn-sm float-right delete';
 editBtn.appendChild(document.createTextNode('Y'));
 li.appendChild(editBtn);

// append li to list
itemList.appendChild(li);

}

// remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}