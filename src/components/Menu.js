import React from 'react';
import recipes from '../recipes'; // Ensure '../recipes' is correctly pointing to your recipes file
import Swal from 'sweetalert2'; // SweetAlert2 for user confirmation and success messages

const Menu = () => {
  const handleOrder = (id) => {
    console.log(id, "id is clicked");

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, order it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Ordered!', 'Your order has been processed.', 'success');
      }
    });
  };

  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-header">
        <h2>This week's specials!</h2>
        <button className="order-menu-btn">Order Menu</button>
      </div>

      {/* Menu Cards */}
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
