class CreateCharts < ActiveRecord::Migration[6.1]
  def change
    create_table :charts do |t|
      t.string :title
      t.integer :row, :default => 1
      t.integer :position, :default => 1
      t.string :width
      t.string :points, :default => ''
      t.string :parent_type
      t.integer :parent_id
      t.string :plot_type, :default => 'line'
      t.string :plot_options, :default => ''

      t.timestamps
    end
  end
end
