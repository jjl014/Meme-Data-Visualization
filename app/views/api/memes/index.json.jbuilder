@memes.each do |meme|
  json.set! meme.id do
    json.partial! '/api/memes/meme', meme: meme
  end
end
