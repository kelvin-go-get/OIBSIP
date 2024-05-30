<<<<<<< HEAD
=======
// Defines a schema for managing pizza related content.
>>>>>>> 11c8edc9dd8ac1a8163bec0d56faccd193272507
export default {
    name:'pizza',
    title:"pizza",
    type:"document",
    fields:[
        {
            name:'image',
            title:'image',
            type:'image',
            options: {
                hotspot: true
            }
        },
        {
            name:'name',
            title:'name',
            type: 'string'
        },
        {
            name:'slug',
            title:'slug',
            type:'slug',
            options: {
                source:'name',
                maxLength:90
            }
        },
        {
            name:'price',
            title: 'price',
            type: 'array',
            of:[{type: 'number'}]
        },
        {
            name: 'details',
            title: 'details',
            type: 'string'
        }
    ]
<<<<<<< HEAD
}
=======
}
>>>>>>> 11c8edc9dd8ac1a8163bec0d56faccd193272507
