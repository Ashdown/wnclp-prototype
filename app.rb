require 'sinatra'
require 'slim'

get '/' do
  erb :home
end

get '/who-we-are' do
  erb :who_we_are
end

get '/ward-spotlight' do
  erb :ward_spotlight
end

get '/elections' do
  erb :elections
end

get '/campaigns' do
  erb :campaigns
end

get '/links' do
  erb :links
end
