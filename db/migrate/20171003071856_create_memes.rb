class CreateMemes < ActiveRecord::Migration[5.1]
  def change
    create_table :memes do |t|
      t.string :name, null: false
      t.string :url_name, null: false
      t.integer :instances_count, null: false
      t.integer :ranking, null: false
      t.integer :total_votes, null: false

      t.timestamps
    end
    add_index :memes, :name, unique: true
  end
end
