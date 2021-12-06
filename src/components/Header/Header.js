import React from 'react';

import Card from '../UI/Card';

import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.main__header}>
          <div className={classes.main__img}>
            <img
              src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
              alt=""
            />
          </div>
          <Card className={classes.main__body}>
            <h2>Delicious Food, Delivered To You </h2>
            <div>
              <p>
                Choose your favorite meal from our broad selection of available
                meals and enjoy a delicious lunch or dinner at home.
              </p>
              <p>
                All our meals are cooked with high-quality ingredients, just-in-time
                and of course by experienced chefs!
              </p>
            </div>
          </Card>
        </div>
      );
}

export default Header
