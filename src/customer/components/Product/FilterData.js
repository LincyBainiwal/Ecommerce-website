export const color=[
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Blue",
    "Yellow",
];

export const filters=[
    {
        id:"color",
        name:"Color",
        options:[
            {value:"white" , label:"white"},
            {value:"Black" , label:"Black"},
            {value:"Red" , label:"Red"},
            {value:"marun" , label:"marun"},
            {value:"Being" , label:"Being"},
            {value:"Pink" , label:"Pink"},
            {value:"Green" , label:"Green"},
            {value:"Blue" , label:"Blue"},
            {value:"Yellow" , label:"Yellow"},
        {value:"Purple" , label:"Purple"}
    
        ],
    },

    {
        id:"size",
        name:"Size",
        options:[
            {value:"S" , label:"S"},
            {value:"M" , label:"M"},
            {value:"L" , label:"L"},
        ],
    },
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"159-399", label:"₹159 To ₹399"},
            {value:"399-599", label:"₹399 To ₹599"},
            {value:"599-799", label:"₹599 To ₹799"},
            {value:"799-999", label:"₹799 To ₹999"},
            {value:"999-1199", label:"₹999 To ₹1199"},
            {value:"1199-1399", label:"₹1199 To ₹1399"},
            {value:"1399-1599", label:"₹1399 To ₹1599"},
            {value:"1599-1799", label:"₹1599 To ₹1799"},

        ],
    },
    {
        id:"discount",
        name:"Discount Range", 
        options:[
        { value:"10", label:"10% And Above"},
        { value:"20", label:"20% And Above"},
        { value:"30", label:"30% And Above"},
        { value:"40", label:"40% And Above"},
        { value:"50", label:"50% And Above"},
        { value:"60", label:"60% And Above"},
        { value:"70", label:"70% And Above"},
        { value:"80", label:"80% And Above"},
     ],
    },

    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock" , label:"In Stock"},
            {value:"out_of_stock" , label:"Out Of Stock"},
        ],
    },
];