class CommentsController < ApplicationController
  def index
    @post = Post.new
    @posts = Post.all.order("created_at DESC")
  end
end
