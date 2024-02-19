class ContactsController < ApplicationController
  def index
    if params[:search]
      contacts = Contact.where('name ILIKE ? OR number ILIKE ?',
                               "%#{params[:search]}%",
                               "%#{params[:search]}%")

      render json: { contacts: } and return
    end

    @contacts = Contact.all
  end

  def show
    contact = Contact.find(params[:id])

    render json: { contact: }
  end
end
