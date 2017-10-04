Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :memes, only: [:create, :index, :update]
  end

  root to: 'api/memes#index'
end
