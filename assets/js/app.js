// function loader() {
//     var preloader = document.querySelector('.page-loader');
//     if (preloader != null) {
//         document.body.onload = function() {
//             setTimeout(function() {
//                 if (!preloader.classList.contains('done')) {
//                     preloader.classList.add('done');
//                 }
//             }, 1000)
//         }
//     }
// }

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.googleapis.com/blogger/v3/blogs/6098245948249025123/posts?key=AIzaSyAs1JcNpnxTfddX1Qs9x-tEY7hQYh6_77A').then(res => res.json()).then(dt => {
    let preloader = document.querySelector('.page-loader');
    let successStory = document.querySelector('#successStory');
    let posts = dt.items
    let output = ``
    posts.forEach( (post)=>{
        output += `
        <div class="swiper-slide" role="group" aria-label="5 / 5" style="width: 410px; margin-right: 30px;">
            <article class="card shadow-lg card-border-start border-secondary card-body">
                <p class="text-right badge badge-xl bg-primary rounded-pill">Business</p>
                <div class="post-header">
                    <h2 class="post-title h2 ls-sm mb-3"><a class="link-dark" href="./blog-post.html">${post.title}</a></h2>
                </div>
                <div class="post-footer">
                    <ul class="post-meta">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>14 Apr 2022</span></li>
                        <li class="post-comments"><a href="#"><i class="uil uil-file-alt fs-15"></i>Coding</a></li>
                    </ul>
                </div>
            </article>
        </div>
        `;
    } )
    successStory.innerHTML += output;
    theme.swiperSlider();

    if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
})
})