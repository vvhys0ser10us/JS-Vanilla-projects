// ****** SELECT ITEMS **********
const submit = document.querySelector('.submit-btn')
const input = document.querySelector('#grocery')
const alert = document.querySelector('.alert')
const list = document.querySelector('.list')
const clear = document.querySelector('.clear-btn')

const container = document.querySelector('.container')
const form = document.querySelector('.form-center')
// edit option
let editFlag = false
let editId
let editText

// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem)
clear.addEventListener('click', clearItem)
window.addEventListener('DOMContentLoaded', loadItems)

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault()
  let id = new Date().getTime().toString()

  let value = input.value

  if (value && !editFlag) {
    // add item
    createList(id, value)
    // add to local storage
    addToLocalStorage(id, value)

    clear.classList.add('show')
    displayAlert('Item added to the list', 'alert-success')
    setBackToDefault()
  } else if (value && editFlag) {
    // edit item
    editText.innerHTML = value
    displayAlert('value changed', 'alert-success')
    // edit local storage
    editLocalStorage(editId, value)
    setBackToDefault()
  } else {
    //no input alert
    displayAlert('Please enter value', 'alert-danger')
  }
}

//displayAlert
function displayAlert(msg, name) {
  alert.textContent = msg
  alert.classList.add(name)

  // remove alert
  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(name)
  }, 1500)
}

function clearItem() {
  list.innerHTML = ''
  setBackToDefault()
  displayAlert('Empty List', 'alert-danger')
  // remove from local storage
  localStorage.removeItem('list')
}

// set back to default
function setBackToDefault() {
  input.value = ''
  editFlag = false
  editId = ''
  submit.textContent = 'submit'
  if (list.childElementCount === 0) {
    clear.classList.remove('show')
  }
}

// edit item
function editItem(e) {
  editFlag = true
  editId = e.currentTarget.parentNode.parentNode.dataset.id
  editText = e.currentTarget.parentNode.previousElementSibling
  input.value = editText.innerHTML
  submit.textContent = 'Edit'
}
//delete item
function deleteItem(e) {
  list.removeChild(e.currentTarget.parentNode.parentNode)
  const id = e.currentTarget.parentNode.parentNode.dataset.id
  displayAlert('item removed', 'alert-danger')
  // remove from local storage
  removeFromLocalStorage(id)
  setBackToDefault()
}

function getLocalStorage() {
  return localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : []
}

function createList(id, value) {
  let item = document.createElement('article')
  item.classList.add('items')
  let attr = document.createAttribute('data-id')
  attr.value = id
  item.setAttributeNode(attr)
  item.innerHTML = `<p class="item-name">${value}</p>
            <div class="btns">
              <button class="icon" id="edit">
                <i class="far fa-edit"></i>
              </button>
              <button class="icon" id="trash">
                <i class="far fa-trash-alt"></i>
              </button>
            </div>`
  // edit and delete button
  const edit = item.querySelector('#edit')
  const trash = item.querySelector('#trash')
  edit.addEventListener('click', editItem)
  trash.addEventListener('click', deleteItem)
  list.appendChild(item)
  item.classList.add('show')
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = { id, value }
  let items = getLocalStorage()
  items.push(grocery)
  localStorage.setItem('list', JSON.stringify(items))
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage()

  items = items.filter((item) => {
    if (item.id !== id) {
      return item
    }
  })
  if (items.length > 0) {
    localStorage.setItem('list', JSON.stringify(items))
  } else {
    localStorage.removeItem('list')
  }
}

function editLocalStorage(id, value) {
  let items = getLocalStorage()
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value
    }
    return item
  })
  localStorage.setItem('list', JSON.stringify(items))
}
// ****** SETUP ITEMS **********

function loadItems() {
  let items = getLocalStorage()
  if (items.length > 0) {
    items.forEach((item) => {
      createList(item.id, item.value)
    })
    clear.classList.add('show')
  }
}
