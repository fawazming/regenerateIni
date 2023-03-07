
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
        console.log(posts)
    posts.forEach( (post)=>{
        output += `
        <article class="item post col-md-6">
    <div class="card">
        <div class="card-body">
            <div class="post-header">
                <div class="post-category text-line">
                    <a href="#" class="hover" rel="category">${post.label?post.label[0]:'No Category'}</a>
                </div>
                <!-- /.post-category -->
                <h2 class="post-title h3 mt-1 mb-3"><a class="link-dark" href="./post.html?cat=2&post=${post.id}">${post.title}</a></h2>
            </div>
            <div class="post-content">
                <p>${post.content.substring(0, 400)}</p>
            </div>
            <!-- /.post-content -->
        </div>
        <!--/.card-body -->
        <div class="card-footer">
            <ul class="post-meta d-flex mb-0">
                <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${post.updated.split('T')[0]}</span></li>
                <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>${post.replies.totalItems}</a></li>
            </ul>
            <!-- /.post-meta -->
        </div>
        <!-- /.card-footer -->
    </div>
    <!-- /.card -->
</article>
        `;
    } )
    successStory.innerHTML = output;
    theme.isotope();
}
    if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }

})
})
