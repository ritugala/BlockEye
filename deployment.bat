
cd build
git remote remove origin
git init
git remote add origin https://github.com/BlockEye/BlockEye.github.io.git
git add .
git commit -m "changes"
git push --force origin master
cd..
git remote remove origin
git remote add origin https://github.com/ritugala/BlockEye.git