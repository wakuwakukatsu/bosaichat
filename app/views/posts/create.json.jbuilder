json.area @post.area
json.user_name @post.user.name
json.created_at @post.created_at.strftime("%Y/%m/%d %H:%M")
json.title @post.title
json.image @post.image.url
json.content @post.content
