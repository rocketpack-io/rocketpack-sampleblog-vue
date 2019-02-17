import rocketpack from '../../rocketpack-javascript/dist/rocketpack'

rocketpack.init({ key: '74cf14fb-ea6e-45ef-e804-08d6932cb5bb' });
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