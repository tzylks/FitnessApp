Rails.application.routes.draw do
  resources :todayworkouts
  resources :user_exercises, only: [:create, :show, :index, :destroy]
  resources :exercises
  resources :users, shallow: true do
    resources :user_goals
    resources :todaysworkouts
  end
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
