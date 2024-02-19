class ContactsController < ApplicationController
  def index
    if params[:search]
      contacts = Contact.where('name ILIKE ? OR number ILIKE ?',
                               "%#{params[:search]}%",
                               "%#{params[:search]}%")

      render json: { contacts: } and return
    end

    @contacts = Contact.select(:name, :number)
  end

  def show

  end
end
