class PostsController < ApplicationController
  def index
    @post = Post.new
    @posts = Post.all.order("created_at DESC")
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      respond_to do |format|
        format.html
        format.json
      end
    end
  end

  private

  def post_params
    params.require(:post).permit(:area, :title, :content, :image).merge(user_id: current_user.id)
  end
end
