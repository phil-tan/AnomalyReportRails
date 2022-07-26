class CreateBuildings < ActiveRecord::Migration[6.1]
  def change
    create_table :buildings do |t|
      t.string :name
      t.string :short_name
      t.string :image, :default => "http://coghillcartooning.com/wp-content/uploads/2010/05/Red-Inc-biz-illustrations-large-v01-e1273166396418.jpg"
      t.string :access_list
      t.references :site, null: false, foreign_key: true

      t.timestamps
    end
  end
end
