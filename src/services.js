import rocketpack from 'rocketpack.io'

rocketpack.init({
  //apiBasePath: 'http://localhost:5000/',
  key: '4dd5f3dc-8aa2-4da8-1338-08d6a8d6d071'
});
var ds = rocketpack.dataService();

export default {
  getBlogPosts() {
    return new Promise((resolve, reject) => {
        var colPosts = ds.collection('blogposts');
        colPosts.find().then(x => {
            resolve(x)
        });
    })
  },
  createBlogPost() {
    var model = { 
        title: 'my first blog post with api',
        date: 'emrooz',
        author: 'Mostafa',
        body: 'this is the first blog post im putting with rocketpack api'
    };
    return new Promise((resolve, reject) => {
        var colPosts = ds.collection('blogposts');
        colPosts.add(model).then(x => {
            resolve(x)
        });
    })
  }
}