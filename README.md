# learn_javascript
1. Git

  git add . 
  git add file.txt
  git commit -m "Nội dung commit"
  git branch            # liệt kê branch
  git branch new-branch # tạo branch mới
  git checkout new-branch   # chuyển sang branch
  git merge branch-name # gộp branch vào branch hiện tại
  git branch -d branch-name # xoá branch
  git remote -v                       # xem remote
  git remote add origin URL           # thêm remote tên origin
  git remote remove origin            # xoá remote
  git push origin main        # đẩy code lên branch main
  git push -u origin main     # đẩy lần đầu (thiết lập upstream)
  git pull origin main        # kéo code mới nhất
  git fetch                   # lấy dữ liệu về nhưng chưa merge
  git reset --hard commit_id  # quay về commit cũ (mất thay đổi)
  git revert commit_id        # tạo commit đảo ngược
