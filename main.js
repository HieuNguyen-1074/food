$('.foood--topnav--menu__icon').click(()=>{
    $('.foood--topnav--menu__icon').toggleClass('foood--topnav--menu__icon__act');
    $('.navbar').toggleClass('navbar-act')
})
let count = 0 ;
let foods = [
    {
        'id' : '1' ,
        'title' : "gdsgfdj",
        'price' : '50.66',
        'isRate' : false,
        'content' :'As sustainability and food waste reduction becomes an ever-more important part of our food systems, we believe it’s essential to explore the ways we reduce food waste and increase food safety and freshness through the use of preservatives.'
    },
    {
        'id' : '2' ,
        'title' : "jhjygfds",
        'price' : '51.66',
        'isRate' : true,
        'content' :'UCSF Health medical specialists have reviewed this information. It is for educational purposes only and is not intended to replace the advice of your doctor or other health care provider. We encourage you to discuss any questions or concerns you may have with your provider.'
    },
    {
        'id' : '3' ,
        'title' : "sdsdsrgtrgt",
        'price' : '54.66',
        'isRate' : false,
        'content' :'As  The calcium content of plant foods is varied. Most vegetables, legumes, nuts, seeds, and dried fruit contain some calcium. Listed are selected significant sources of well-absorbed calcium.'
    }
];
$('.fa-arrow-right , .fa-arrow-left ').click((e)=>{
    // if(count <= 2){
    //     if( e.target.classList[1] === 'fa-arrow-right'){
    //         if(count ===  2){
    //             count = -1;
                
    //         }
    //            ++count;
        
    //         }
    //     else if( e.target.classList[1] === 'fa-arrow-left'){
    //         if(count === 0){

    //         }
    //         else{
    //             count--;
    //         }
        
    //     console.log('s')
    //     }
        
    //     }

    //     else{
    //         count = 0;
    //     }
         if( e.target.classList[1] === 'fa-arrow-right'){
           if(count === foods.length - 1){

           }
           else{
               count++;
               animation(e)
           }
           

     }
      else if( e.target.classList[1] === 'fa-arrow-left'){
        if(count === 0){
   
        }
        else{
            animation(e);
            count--;
            
        }
    }
})
    function animation(){
   if(foods[count].isRate === true){
    $('.fa-star').css('color','#ffe000')
   }        
   else{
    $('.fa-star').css('color','#fff')
   } 
        $('.food--img').animate({
            width: '0px',
        },1000,()=>{
            $('.food--img').css('background',`url(./img/${count}.jpeg)`);
            $('.food--img').animate({
                width: '100%',
            
           
        })
    })
        $('.food--content__h1').children('h1').animate({top:'200px'},1000,()=>{
         
            $('.food--content__h1').children('h1').html(`${foods[count].title}`)
            $('.food--content__h1').children('h1').animate({top:'0px'});
    
                })
                $('.food--content--main__price').children('span').animate({
                   left : '100px',
                   opacity: '0'
                },1000,()=>{
    
                    $('.food--content--main__price').children('span').animate({
                        left : '0px',
                        opacity:'1'
                })
                $('.food--content--main__price').children('span').html(`${foods[count].price}`)
            })
                
       $('.food--coontent--main').children('p:nth-of-type(1)').animate({opacity:'0'},1000,()=>{
    $('.food--coontent--main').children('p:nth-of-type(1)').animate({opacity:'1'})
    $('.food--coontent--main').children('p:nth-of-type(1)').html(`${foods[count].content}`)
        }
    );
    
    }
   
console.log(e.target.classList[1],count);

