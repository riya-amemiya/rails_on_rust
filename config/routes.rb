Rails.application.routes.draw do
  root "main#index"
  get "home" => "main#home"
  get "api" => "api#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
