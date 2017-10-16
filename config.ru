require 'rubygems'
require 'bundler/setup'
require 'sprockets'
require './app'

set :run, false
set :raise_errors, true

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path 'assets/stylesheets'
  environment.append_path 'assets/javascripts'
  environment.append_path 'assets/images'
  environment.append_path 'assets/json'
  environment.append_path 'assets/fonts'
  run environment
end

run Sinatra::Application
