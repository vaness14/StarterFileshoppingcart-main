
//Variables

const courses = document.querySelector('#courses-list'); 
shoppingCartContent = document.querySelector('#cart-content tbody'),
      clearCartBtn = document.querySelector('#clear-cart');




//Listeners

function loadEventListeners() {

//When a new course is added
  courses.addEventListener('click', buyCourse);


//Clear cart Btn
    clearCartBtn.addEventListener('click', clearCart);

//Document Ready
    document.addEventListener('DOMContentLoaded', getFromLocalStorage);


}


//Functions

function buyCourse(e) {
e.preventDefault();

 //Use Delegation to find the course that was added 
if(e.target.classList.contains('add-to-cart')) {
        //Read the Course value
        const course = e.target.parentElement.parentElement;

        //Read the values
        getCourseInfo(course);
    }
}
//Reads the HTML information of the selected course
function getCourseInfo(course)
 
function getCourseInfo(course){

}
