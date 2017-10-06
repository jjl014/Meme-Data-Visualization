class Api::MemesController < ApplicationController
  def create
    @meme = Meme.find_by(name: meme_params[:name])
    if @meme
      if @meme.update_attributes(meme_params)
      else
        render json: @meme.errors.full_messages
      end
    else
      @meme = Meme.new(meme_params)
      if @meme.save
      else
        render json: @meme.errors.full_messages
      end
    end
  end

  def index
    @memes = Meme.all.limit(100)
  end

  private

  def meme_params
    params.require(:meme).permit(:name, :url_name, :instances_count, :ranking, :total_votes, :img_url)
  end
end
