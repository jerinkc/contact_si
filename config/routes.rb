Rails.application.routes.draw do
  resources :contacts, only: %i[index show]

  root "contacts#index"
end
