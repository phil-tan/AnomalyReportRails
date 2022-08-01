class CreateChartRows < ActiveRecord::Migration[6.1]
  def change
    create_table :chart_rows do |t|
      t.string :row_number
      t.string :title
      t.string :height, :default => '40vh'
      t.string :parent_type
      t.integer :parent_id
      t.timestamps
    end
  end
end
