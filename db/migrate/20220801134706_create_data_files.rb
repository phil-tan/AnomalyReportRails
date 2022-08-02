class CreateDataFiles < ActiveRecord::Migration[6.1]
  def change
    create_table :data_files do |t|
      t.string :name
      t.string :attachment
      t.string :site_id

      t.timestamps
    end
  end
end
