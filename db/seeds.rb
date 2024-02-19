
contacts = {
  "conatct 1" => 80980098908,
  "conatct 2" => 908209473873,
  "conatct 3" => 80237480234,
  "conatct 4" => 50923840980,
  "conatct 5" => 80980098908,
}

contacts.each do |name, number|
  Contact.create!(name:, number:)
end
