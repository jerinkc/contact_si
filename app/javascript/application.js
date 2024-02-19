// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

// TODO: Refactor to use Turbo Streams or move items into seperate file probably contacts
// TODO: Add showContact and back from showContact page functionality


function searchContacts(){
  let input = document.getElementById('search').value

  fetch(`/contacts?search=${input}`, {})
    .then(response => response.json())
    .then(response => {
      const list = document.getElementById('contactlist')
      const { contacts } = response

      const contactsHTML = contacts.map(contact => {
        return `<div class="contact" onclick="showContact(${contact.id})">
          <p>${contact.name}<br/>${contact.number}</p><hr/></div>`
      }).join('')
      list.innerHTML = contactsHTML
    })
    .catch(err => console.log(err))
}

function showContact(contactId){
  fetch(`/contacts/${contactId}`, {})
    .then(response => response.json())
    .then(response => {
      const page = document.getElementById('contactsPage')
      const pageChildren = page.children
      const { contact } = response

      const contactHTML = `
        <span onclick="closePage(${pageChildren})">Back</span><p>
        <strong>Name</strong>: ${contact.name}<br/>
        <strong>Name</strong>:${contact.number}</p>`
      list.innerHTML = contactHTML
    })
    .catch(err => console.log(err))
}

function closePage(pageChildren){
  const page = document.getElementById('contactsPage')

  pageChildren.innerHTML = pageChildren
}


window.addEventListener('turbo:load', () => {
  const body = document.querySelector('body')
  if (body) {
    const searchbar = document.getElementById('search')
    searchbar.addEventListener('input', () => {
      searchContacts()
    })
  }
})
