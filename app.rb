require 'sinatra'
require 'slim'

get '/' do
  erb :home
end

get '/campaigns' do
  erb :campaigns
end

get '/volunteer' do
  erb :volunteer
end

get '/elected-representatives' do
  erb :elected_representatives
end

get '/officers-and-contacting-us' do
  erb :officers_and_contacting_us
end

get '/member-meetings' do
  erb :member_meetings
end

get '/donate' do
  erb :donate
end
