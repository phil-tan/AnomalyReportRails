class CreateSites < ActiveRecord::Migration[6.1]
  def change
    create_table :sites do |t|
      t.string :name
      t.string :short_name
      t.string :image, :default => "http://coghillcartooning.com/wp-content/uploads/2010/05/Red-Inc-biz-illustrations-large-v01-e1273166396418.jpg"
      t.string :access_list

      t.timestamps
    end
  end
end
