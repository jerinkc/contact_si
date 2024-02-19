// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

function searchContacts(){
  let input = document.getElementById('search').value

  fetch(`/contacts?search=${input}`, {})
    .then(response => response.json())
    .then(response => {
      const list = document.getElementById('contactlist')
      const { contacts } = response

      const contactsHTML = contacts.map(contact => `<p>${contact.name}<br/>${contact.number}</p>`).join('')
      list.innerHTML = contactsHTML
    })
    .catch(err => console.log(err))
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
