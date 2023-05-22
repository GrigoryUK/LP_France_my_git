# config valid for current version and patch releases of Capistrano
lock "~> 3.14.1"

set :application, "lp_france"
set :repo_url, "git@github.com:Kvlads/LP_France.git"

set :rbenv_type, :user
set :rbenv_ruby, '2.6.5'

set :nvm_type, :user
set :nvm_node, 'v14.21.3'
set :nvm_map_bins, %w{node npm yarn rake}

set :branch, :main

set :deploy_to, "/home/deploy/lp_france"

set :format, :airbrussh

append :linked_files, ".env", "config/master.key"

append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

set :keep_releases, 5

namespace :rbenv do
  desc "Installs ruby version specified"
  task :install do
    on roles(:all) do
      execute "#{fetch(:rbenv_path)}/bin/rbenv", :install, fetch(:rbenv_ruby), '--skip-existing'
    end
  end
  before :validate, :install
end

namespace :deploy do
  task :restart do
    on roles(:app) do
      execute :systemctl, '--user', :restart, :puma
    end
  end

  after :published, :restart
end
