### API Endpoints

## /populate
curl --location 'http://localhost:8555/populate'

response: 
        {
            "message": "Data fetched and inserted successfully"
        }


## /search
curl --location 'http://localhost:8555/search' \
--header 'Content-Type: application/json' \
--data '{
    "name": "",
    "body": ""
}'





          
Response 

      [
    {
        "_id": "66e14c13b73503cef82e2b64",
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        "__v": 0
    },
    {
        "_id": "66e148c3ef00c919dbe02d68",
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
        "__v": 0
    },
    {
        "_id": "66e14c13b73503cef82e2b65",
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        "__v": 0
    },
    {
        "_id": "66e148c3ef00c919dbe02d69",
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
        "__v": 0
    },
    {
        "_id": "66e148c3ef00c919dbe02d6a",
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
        "__v": 0
    }
]

