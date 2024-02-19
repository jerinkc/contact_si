
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


function showContact(contactId){
  fetch(`/contacts/${input}`, {})
    .then(response => response.json())
    .then(response => {
      const page = document.getElementById('contactsPage')
      const { contact } = response

      const contactHTML = `<p>
        <strong>Name</strong>: ${contact.name}<br/>
        <strong>Name</strong>:${contact.number}</p>`
      list.innerHTML = contactHTML
    })
    .catch(err => console.log(err))
}
