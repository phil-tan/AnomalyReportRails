class CreateCharts < ActiveRecord::Migration[6.1]
  def change
    create_table :charts do |t|
      t.string :title
      t.integer :row
      t.integer :order
      t.string :width
      t.string :points
      t.string :parent_type
      t.references :building, null: false, foreign_key: true

      t.timestamps
    end
  end
end
