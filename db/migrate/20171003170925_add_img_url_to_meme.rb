class AddImgUrlToMeme < ActiveRecord::Migration[5.1]
  def change
    add_column :memes, :img_url, :string
  end
end
