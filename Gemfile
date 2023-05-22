source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.2'
gem 'dotenv-rails'
gem 'pry-rails'
gem 'sassc-rails'

gem 'puma', '~> 4.1'
gem 'mysql2'

gem 'webpacker', '~> 5.0'

gem 'jbuilder', '~> 2.7'
gem 'haml'

# gem 'MailchimpTransactional'
gem 'faraday'

gem 'activeadmin', '~> 2.8'
gem 'devise', '~> 4.7'
gem 'i18n', '~> 1.8'
gem 'spreadsheet'

gem 'listen'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'

  gem 'capistrano', '~> 3.14.1', require: false
  gem "capistrano-rails", require: false
  gem 'capistrano-nvm', require: false
  gem 'capistrano-rbenv', require: false

end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  # Easy installation and use of web drivers to run system tests with browsers
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
