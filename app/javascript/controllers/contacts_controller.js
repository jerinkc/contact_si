import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="contacts"
export default class extends Controller {
  static targets = ["search", "searchTarget", "contactItem"]

  connect() {

  }

  searchContacts(){
    let lowerCaseSearchInput = this.searchTarget.value.toLowerCase()

    this.contactItemTargets.forEach((element, index) => {
      const searchValue = element.getAttribute('data-search-key')

      element.style.display = searchValue.includes(lowerCaseSearchInput)
                            ? "block"
                            : "none"
    })
  }

  openContactShow(event){
    const contactInfo = event.currentTarget.getAttribute('data-contact-show-params')
    // const modal = this.modalTarget
    const contactJSON = JSON.parse(contactInfo)
    console.log(contactJSON)
    // modal.style.display = 'block'
    // modal.innerHTML = contactJSON
  }

  cloaseContactShow(){
    modal.style.display = 'none'
  }
}

