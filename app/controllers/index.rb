get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

post '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  if request.xhr?
    # post.votes.json
    erb :"/votes/_vote_points", locals: {post: post}, layout: false
  else
    redirect "/posts"
  end
end

delete '/posts/:id' do
  @posts = Post.all
  post = Post.find(params[:id])
  post.destroy
  if request.xhr?
    erb :'/posts/_post_list', locals: {posts: @post}, layout: false
  else
    redirect "/posts"
  end
end

post '/posts' do
  post = Post.create( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if request.xhr?
    erb :'/posts/_post', locals: {post: post}, layout: false
  else
    redirect '/posts'
  end
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
