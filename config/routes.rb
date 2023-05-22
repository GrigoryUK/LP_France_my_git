Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'site#index'
  get 'bordeaux', to: 'site#bordeaux', as: :bordeaux
  get 'paris', to: 'site#paris', as: :paris
  get 'marselle', to: 'site#marselle', as: :marselle
  get 'nice', to: 'site#nice', as: :nice
  get 'lyon', to: 'site#lyon', as: :lyon
  get 'cookies', to: 'site#cookies', as: :cookies
  get 'paris-region-ge', to: 'site#paris_region_ge', as: :paris_region_ge
  get 'paris-region-ar', to: 'site#paris_region_ar', as: :paris_region_ar
  get 'loirevalley-ar', to: 'site#loirevalley_ar', as: :loirevalley_ar
  get 'loirevalley-ge', to: 'site#loirevalley_ge', as: :loirevalley_ge
  get 'new-aquitaine-ar', to: 'site#new_aquitaine_ar', as: :new_aquitaine_ar
  get 'new-aquitaine-ge', to: 'site#new_aquitaine_ge', as: :new_aquitaine_ge
  get 'occitania-ar', to: 'site#occitania_ar', as: :occitania_ar
  get 'occitania-ge', to: 'site#occitania_ge', as: :occitania_ge
  
  resources :orders, only: :create
end
