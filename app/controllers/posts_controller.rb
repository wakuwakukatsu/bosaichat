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

  def show
    @post = Post.find(params[:id])
    @comment = Comment.new
    @comments = @post.comments.includes(:user).order("created_at DESC")
  end

  def search
    @posts = Post.search(params[:keyword])
    render "comments/index"
  end

  private

  def post_params
    params.require(:post).permit(:area, :title, :content, :image).merge(user_id: current_user.id)
  end
end
