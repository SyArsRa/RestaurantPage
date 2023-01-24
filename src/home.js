const content = document.getElementById("content");
export default function loadHome(){
    content.innerHTML += `
        <div class="homeBody">    
            <div class="transparent">
                <h2>Cano Cay Cade</h2>
                <h3>
                    Welcome to Cano Cay Cade, a one-of-a-kind restaurant that specializes 
                    in dishes made with sweets and chocolates. Our menu features a variety of 
                    unique and delicious items that will tantalize your taste buds. Whether you're 
                    in the mood for a sweet breakfast, a decadent dessert, or a satisfying meal, we've got you covered. 
                    Our chefs use only the finest ingredients to create mouth-watering dishes that are sure to please. 
                    Come join us and experience the perfect blend of sweet and savory flavors. We look forward to serving you!
                </h3>
                <h3>
                    At Cano Cay Cade, we pride ourselves on providing exceptional service to all of our guests. 
                    Our friendly and attentive staff will ensure that your dining experience is nothing short of perfect. 
                    From the moment you walk through our doors, we'll take care of you and make sure you have everything you need.
                </h3>
                <h3>
                    In addition to our delicious food and drinks, we also offer a warm and inviting atmosphere. 
                    Our restaurant has a cozy and relaxed vibe that makes it the perfect spot for a romantic dinner, 
                    a special occasion, or a casual meal with friends and family. Whether you're looking to celebrate 
                    something special or simply enjoy a night out, we're the perfect place to do it.
                </h3>
            </div>
        </div>
    `
}