
export const data = {
    
    martys : {
        img:"https://www.seekpng.com/png/full/482-4822222_burger-and-fries-png-vector-library-12oz-coke.png",
        name : "martys",
        price: 6.75,
        
        num:1

    },
    
 chesseburger : {
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?crop=1.00xw:0.748xh;0,0.156xh&resize=980:*",
        name : "chesseburger",
        price: 3,
        
        num:1
    },
    
    sundae: {
        img: "https://preview.pixlr.com/images/800wm/1273/2/1273205631.jpg",
            name : "sundae",
            price: 1,
            
            num:1
        },

        slice: {
               img: "https://media.istockphoto.com/photos/pizza-slice-picture-id176003066?k=20&m=176003066&s=170667a&w=0&h=fsnLG0STMbhSjiYEuURs4zoWpoc0gyEvUb7wbBHH_BQ=",
                name : "slice",
                price: 2,
                
                num:1
            },
        
    
            }

    export var or=[]
    
for(var i in data){
    for(var j in data[i]){
        if(j==="price"){
           or.push(data[i][j])
        }
    }
}




