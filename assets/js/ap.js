document.querySelector('#sharer').addEventListener('click', ()=>{
    navigator.share({
      title: document.querySelector('#title').innerText,
      // text: 'Hello World',
      url: window.location,
    });
})
document.addEventListener('DOMContentLoaded', function() {
    // 6098245948249025123 success Stories
    // 1346166897209287770 news & Event

    const url = new URL(`${window.location}`)
    const postID = url.searchParams.get('post');
    const category = url.searchParams.get('cat');
    let URI = '';
    if(category == 1){
        URI = `https://www.googleapis.com/blogger/v3/blogs/1346166897209287770/posts/${postID}?key=AIzaSyAs1JcNpnxTfddX1Qs9x-tEY7hQYh6_77A`;
    }else if(category == 2){
        URI = `https://www.googleapis.com/blogger/v3/blogs/6098245948249025123/posts/${postID}?key=AIzaSyAs1JcNpnxTfddX1Qs9x-tEY7hQYh6_77A`
    }
    fetch(URI).then(res => res.json()).then(dt => {
    let preloader = document.querySelector('.page-loader');
    let successStory = document.querySelector('#story');
    let title = document.querySelector('#title');
    let updated = document.querySelector('#updated');
    let comments = document.querySelector('#comments');
    let catg = document.querySelector('#catg');
    let story = dt
    let output = story.content;
    successStory.innerHTML = output;
    title.innerHTML = story.title;
    catg.innerHTML = story.labels?story.labels[0]:'No Category'
    comments.innerHTML = story.replies.totalItems
    updated.innerHTML = story.updated.split('T')[0]
    theme.swiperSlider();
    if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }

})
})
