import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
    const [details, setDetails] = useState([
        {
            "id": 1,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 51,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 2,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 61,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "footer1",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },

        {
            "id": 3,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 4,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 5,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 6,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 54,
            "title": "BollyWood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "mix",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 7,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 8,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 9,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 10,
            "title": "Bollywood",
            "Image": "https://images.unsplash.com/photo-1580194191675-f66754a68698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9sbHl3b29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            "category": "Bollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 11,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 55,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "mix",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 12,
            "title": " The Lord of the Rings: The Return of the King (2003) 8.9. ",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 13,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version."
        },
        {
            "id": 62,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "footer2",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 14,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 15,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 16,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://media.istockphoto.com/photos/hollywood-dog-picture-id153534659?k=20&m=153534659&s=612x612&w=0&h=6CZqiaj26gXKPKMuWme4DjeCRuPigYt_6Z8PxeFKMkY=",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 17,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 18,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9. ",
            "Image": "https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 19,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 20,
            "title": "The Lord of the Rings: The Return of the King (2003) 8.9.",
            "Image": "https://images.news18.com/ibnlive/uploads/2016/04/12931171_1079163228794337_8732305975871635522_n.jpg",
            "category": "Hollywood",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 21,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 56,
            "title": " Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "mix",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 52,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 22,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 63,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "footer3",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 22,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 23,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 24,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 25,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 26,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 27,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 28,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 29,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 30,
            "title": "Technology is the application of knowledge to reach practical goals in a specifiable and reproducible way.",
            "Image": "https://media.istockphoto.com/photos/machine-learning-hands-of-robot-and-human-touching-on-big-data-picture-id1206796363?k=20&m=1206796363&s=612x612&w=0&h=IapYt1UYr9kJGX7gunSjksvAGiiqF6DzB0GVo-BgLeE=",
            "category": "Technology",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 31,
            "title": " The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 32,
            "title": " The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations ",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 33,
            "title": "The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 34,
            "title": " The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations ",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 35,
            "title": " The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 37,
            "title": "The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "mix",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 36,
            "title": " The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 37,
            "title": " The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 38,
            "title": "The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations ",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 39,
            "title": "The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 40,
            "title": " The modern definition of fitness describes either a person or machine's ability to perform a specific function or a holistic definition of human adaptability to cope with various situations",
            "Image": "https://us.123rf.com/450wm/olgamaslov/olgamaslov1603/olgamaslov160300162/53862974-fitness-emblem-woman-silhouette-illustration.jpg?ver=6",
            "category": "Fitness",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 41,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism. ",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 42,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism. ",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 43,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism. ",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 44,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism. ",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 45,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism. ",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 46,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism. ",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 46,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism.",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 47,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism.",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 48,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism.",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 49,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism.",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 58,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism.",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "mix",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },
        {
            "id": 50,
            "title": "Food is any substance consumed to provide nutritional support and energy to an organism.",
            "Image": "https://media.istockphoto.com/photos/assortment-of-vietnamese-noodle-soup-in-food-court-picture-id1320656301?k=20&m=1320656301&s=612x612&w=0&h=b9M1CqnBJO3OnfAnh8ov4R3XnGdgALLZlr5yLx9fCbE=",
            "category": "Food",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        },

    ]);
    return (
        <div>
            <store.Provider value={[details, setDetails]}>

                {props.children}


            </store.Provider>
        </div>
    )
}

export default Details;