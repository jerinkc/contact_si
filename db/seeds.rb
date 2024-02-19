contacts = {
  'contact 1' => 80980098908,
  'contact 2' => 908209473873,
  'contact 3' => 80237480234,
  'contact 4' => 50923840980,
  'contact 5' => 80980098908,
}

contacts.each do |name, number|
  Contact.create!(name:, number:)
end
