class Sponsers < ActiveRecord::Migration[5.2]
  def change
    create_table :sponsers do |t|
      t.belongs_to :group
      t.belongs_to :charity
    end
  end
end
