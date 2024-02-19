
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
