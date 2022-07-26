Rails.application.routes.draw do
  root to: 'pages#home'
  devise_for :users

  # sites
  get '/sites', to: 'sites#index'
  get '/sites/:id', to: 'sites#show', as: 'site'
  get '/sites/new', to: 'sites#new'
  post '/sites', to: 'sites#create'
  get '/sites/:id/edit', to: 'sites#edit'
  patch '/sites/:id', to: 'sites#update'
  delete '/sites/:id', to: 'sites#delete'
  get '/sites/:id/access', to: 'sites#access'
  get '/sites/:id/access/edit', to: 'sites#access_edit'
  patch '/sites/:id/access', to: 'sites#index'
  get '/sites/:id/points', to: 'sites#points'
  post '/sites/:id/upload_data', to: 'sites#upload_data'

  # buildings
  get '/sites/:site_id/buildings', to: 'buildings#index'
  get '/buildings/:id', to: 'buildings#show'
  get '/sites/:id/buildings/new', to: 'buildings#new'
  post '/sites/:id/buildings', to: 'buildings#create'
  get '/buildings/:id/edit', to: 'buildings#edit'
  patch '/buildings/:id', to: 'buildings#update'
  delete '/buildings/:id', to: 'buildings#destroy'
  get '/building/:id/report', to: 'buildings#report'

  # charts
  get '/sites/:id/charts/new', to: 'charts#new'
  post '/sites/:id/charts', to: 'charts#create'
  get '/buildings/:id/charts/new', to: 'charts#new'
  post '/buildings/:id/charts', to: 'charts#create'
  get '/charts/:id/edit', to: 'charts#edit'
  patch '/charts/:id', to: 'charts#update'
  delete '/charts/:id', to: 'charts#destroy'

end
