const content = document.getElementById("content");
export default function loadMenu(){
    content.innerHTML += `
    <div class="menuBody">
        <h1>Menu</h1>
        <img src="images\\pancake.png" alt="pancakepic">
        <div class="contentMenu">
            <ul>
                <h3>Breakfast</h3>
                <li><h4>Chocolate Chip Pancakes</h4> fluffy pancakes made with chocolate chips and served with maple syrup.</li>
                <li><h4>Chocolate French Toast</h4> thick slices of bread dipped in a chocolate batter and grilled to perfection.</li>
                <li><h4>Chocolate Waffles</h4> crisp and fluffy waffles made with cocoa powder and served with chocolate sauce.</li>
                <hr>
                <h3>Appetizers</h3>
                <li><h4>Chocolate Fondue</h4> a warm and creamy chocolate fondue served with fresh fruits and pastries for dipping.</li>
                <li><h4>Chocolate-covered Strawberries</h4> plump and juicy strawberries dipped in rich chocolate.</li>
                <li><h4>Chocolate-covered Bacon</h4> crispy bacon strips coated in chocolate and sprinkled with sea salt.</li>
                <hr>
                <h3>Entrees</h3>
                <li><h4>Chocolate Steak</h4> a juicy steak cooked to your liking and topped with a chocolate herb butter.</li>
                <li><h4>Chocolate Chicken</h4> tender chicken breast cooked in a chocolate-based sauce and served with vegetables.</li>
                <li><h4>Chocolate Risotto</h4> creamy risotto made with chocolate and topped with grated parmesan cheese.</li>
                <hr>
                <h3>Desserts</h3>
                <li><h4>Chocolate Brownie Sundae</h4> a warm chocolate brownie served with vanilla ice cream and chocolate sauce.</li>
                <li><h4>Chocolate Mousse</h4> a rich and creamy chocolate mousse served in a chocolate cup.</li>
                <li><h4>Chocolate Souffle</h4> a light and airy chocolate souffle served with a side of chocolate sauce.</li>
                <hr>
                <h3>Drinks</h3>
                <li><h4>Chocolate Martini</h4> a delicious mix of chocolate liqueur and vodka.</li>
                <li><h4>Chocolate Affogato</h4> a scoop of vanilla ice cream drowned in a shot of hot chocolate.</li>
                <li><h4>Hot Chocolate</h4> a rich and creamy hot chocolate made with real cocoa and served with whipped cream.</li>
            </ul>
        </div>
    </div>
    `
};