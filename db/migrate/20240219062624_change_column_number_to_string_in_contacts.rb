class ChangeColumnNumberToStringInContacts < ActiveRecord::Migration[7.0]
  def change
    change_column :contacts, :number, :string
  end
end
