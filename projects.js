// Projects

const projects = [
    {
        name: 'EVENT-LOCATION ',
        type: 'EVENT-TYPE',
        pos: 'start',
        image: './assets/9.jpeg' 
    },
    {
        name: 'EVENT-LOCATION',
        type: 'EVENT-EVENT',
        pos: 'mid',
        image: './assets/10.jpeg' 

    },
    {
        name: 'EVENT-LOCATION',
        type: 'EVENT-TYPE',
        pos: 'end',
        image: './assets/12.jpeg' 
    },
    {
        name: 'EVENT-LOCATION',
        type: "EVENT-TYPE",
        pos: 'mid',
        image: './assets/11.jpeg' 
    },
    {
        name: 'EVENT-LOCATION',
        type: 'EVENT-TYPE',
        pos: 'end',
        image: './assets/10.jpeg' 
    },
    {
        name: 'EVENT-LOCATION',
        type: 'EVENT-TYPE',
        pos: 'mid',
        image: './assets/3.jpeg'   
    },
    {
        name: 'EVENT-LOCATION',
        type: 'EVENT-TYPE',
        pos: 'start',
        image: './assets/4.jpeg' 
    },
    {
        name: 'EVENT-LOCATION',
        type: 'EVENT-TYPE',
        pos: 'end',
        image: './assets/5.jpeg' 
    },

]

const createProjects = () => {
    projects.forEach(project => {
        let panel = document.createElement('div');
        panel.classList.add('project', `${project.pos}`);

        let imageContainer = document.createElement('div');
        imageContainer.className = `image__container`;

        let image = document.createElement('img');
        image.classList.add('project__image');
        image.src = project.image;

        let projectDetails = document.createElement('div');
        projectDetails.classList.add('project__details');

        let projectTitle = document.createElement('p');
        projectTitle.innerText = project.name;

        let projectType = document.createElement('p');
        projectType.innerText = project.type;

        projectDetails.append(projectTitle, projectType)

        imageContainer.appendChild(image);
        panel.append(imageContainer, projectDetails);

        document.querySelector('.projects__slider').appendChild(panel);
    })

}


// Blog posts

const blogPosts = [
    {
        title: 'EVENT-LOCATION',
        time: 'EVENT-TYPE', 
        image: './assets/1.jpeg' 
    },
    {
        title: 'EVENT-LOCATION',
        time: 'EVENT-TYPE', 
        image: './assets/7.jpeg' 
    },
    {
        title: 'EVENT-LOCATION',
        time: 'EVENT-TYPE',
        image: './assets/11.jpeg' 
        
    },
    {
        title: 'EVENT-LOCATION',
        time: 'EVENT-TYPE',
        image: './assets/14.jpeg' 
        
    }
]

const createBlogposts = () => {
    blogPosts.forEach(post => {
        let blogPostSection = document.createElement('div');
        blogPostSection.classList.add('blog__post');

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let imageContainer = document.createElement('div');
        imageContainer.classList.add('post__image__container');

        let image = document.createElement('img');
        image.classList.add('blog__post__img');
        image.src = post.image;

        let postDetails = document.createElement('div');
        postDetails.classList.add('post__details');

        let postTitle = document.createElement('p');
        postTitle.innerText = post.title;

        let postTime = document.createElement('p');
        postTime.innerText = post.time;

        imageContainer.appendChild(image);
        postDetails.append(postTitle, postTime);
        postDiv.append(imageContainer, postDetails)
        blogPostSection.appendChild(postDiv);

        document.getElementById('blog').appendChild(blogPostSection)

    })
}



export {
    createProjects,
    createBlogposts
}