Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :groups, only: [:index, :show, :create] do
        resources :charities, only:[:index, :show, :create]
      end
    end
  end
  namespace :api do
    namespace :v1 do
        resources :users, only: [:show]
      end
    end
  namespace :api do
    namespace :v1 do
        resources :memberships, only: [:index, :show, :create]
      end
    end
  get '/users/:id', to: 'homes#index'
  get '/groups/:id', to: 'homes#index'
  get '/group/new', to: 'homes#index'
  get '/groups/:id/charities/new', to: 'homes#index'
end
