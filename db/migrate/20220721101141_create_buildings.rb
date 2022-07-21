class CreateBuildings < ActiveRecord::Migration[6.1]
  def change
    create_table :buildings do |t|
      t.string :name
      t.string :short_name
      t.string :address
      t.string :image_url
      t.string :access_list
      t.references :site, null: false, foreign_key: true

      t.timestamps
    end
  end
end
