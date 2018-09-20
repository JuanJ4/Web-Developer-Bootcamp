var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "JavaScript the language that changed my world ", image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=540f14856de81b9306b3bfc870827fe7&auto=format&fit=crop&w=1350&q=80"},
        {name: "Intro To React Js ", image: "https://images.unsplash.com/photo-1508643315917-6688bbbb4cb5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8ded8ce7550446784befccf63ad704c&auto=format&fit=crop&w=1350&q=80"},
        {name: "Pair Programming: Fastest Way Of Learning Code", image: "https://images.unsplash.com/photo-1498622566531-8459261af8f0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7cd0567d2120a2d88ad2cbadfac1642&auto=format&fit=crop&w=1350&q=80"},
        {name: "Is A Coding Bootcamp Worth it?", image: "https://images.unsplash.com/photo-1499334844006-d49df7788949?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4dfea9b7bc57a31ea188b2de2bf8e736&auto=format&fit=crop&w=1350&q=80"},
        {name: "Machine Learning", image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebf7cc0ae34d904ab2f46676a0a6dd6d&auto=format&fit=crop&w=1050&q=80"},
        {name: "Working at a Start-Up", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14cc613995f60d89c4a908f3ea5c2409&auto=format&fit=crop&w=1074&q=80"},
        {name: "Get Started with Python Programming", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575755492ef51726cb066f422908b9d7&auto=format&fit=crop&w=1350&q=80"},
        {name: "My Goals for 2018", image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c0a516c606e1fb3b60fff20fe5e88c2e&auto=format&fit=crop&w=1048&q=80"}
];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image}
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});



// This is a site I have been working on, I plan to have s site like WES BOS and Tyler Mcginnis, they are knowledgable developers who teach courses and that has inspired me to want to do the same.