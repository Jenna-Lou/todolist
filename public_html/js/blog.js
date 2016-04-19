$(function () {
    var APPLICATION_ID = "9E68C957-FE0B-B71A-FF22-960C534DBE00",
        SECRET_KEY = "754A82C5-264A-EB53-FF45-B1D1DFA6D700",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
       
        var postsCollection = Backendless.Persistence.of(Posts).find();
        
        console.log(postsCollection);
        
        var wrapper = {
            posts: postsCollection.data
        };
        
        Handlebars.registerHelper('format', function (time) {
            return moment(time).format("dddd, MMMM Do YYYY");
        });
        
        var blogScript = $("#blogs-template").html();
        var blogTemplate = Handlebars.compile(blogScript);
        var blogHTML = blogTemplate(wrapper);
        
        $('.main-container').html(blogHTML);    
});

function Posts (args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}