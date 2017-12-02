import request from 'request';
import fs from 'fs';

// console.log(request);
request.get('https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910830216.webp')
       .pipe(fs.createWriteStream('./千与千寻.jpg'));