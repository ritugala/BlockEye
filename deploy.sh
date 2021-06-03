npm run build
cd build
git init
git remote add origin https://github.com/BlockEye/BlockEye.github.io.git
git add .
git commit -m "changes"
git push --force origin master
cd ..