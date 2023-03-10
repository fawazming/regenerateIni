
document.addEventListener('DOMContentLoaded', function() {
    // 6098245948249025123 success Stories
    // 1346166897209287770 news & Event
    fetch('https://www.googleapis.com/blogger/v3/blogs/6098245948249025123/posts?key=AIzaSyAs1JcNpnxTfddX1Qs9x-tEY7hQYh6_77A').then(res => res.json()).then(dt => {
    let preloader = document.querySelector('.page-loader');
    let successStory = document.querySelector('#successStory');
    let posts = dt.items
    let output = ``
    if (posts == undefined){
        output = `<center><h2>No posts currently</h2></center>`
        successStory.innerHTML += output;
    }else{
    posts.forEach( (post)=>{
        console.log(post);
        output += `
        <div class="swiper-slide" role="group" aria-label="5 / 5" style="width: 410px; margin-right: 30px;">
            <article class="card shadow-lg card-border-start border-secondary card-body">
                <p class="text-right badge badge-xl bg-primary rounded-pill">${post.labels?post.labels[0]:'No Category'}</p>
                <div class="post-header">
                    <h2 class="post-title h2 ls-sm mb-3"><a class="link-dark" href="./post.html?cat=2&post=${post.id}">${post.title}</a></h2>
                </div>
                <div class="post-footer">
                    <ul class="post-meta">
                        <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${post.updated.split('T')[0]}</span></li>
                    </ul>
                </div>
            </article>
        </div>
        `;
    } )
    successStory.innerHTML += output;
    theme.swiperSlider();
}
    if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }

})
})