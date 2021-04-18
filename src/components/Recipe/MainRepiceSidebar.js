import React from 'react';

import MainRecipeSidbarItem from './MainRecipeSidbarItem';


function MainRepiceSidebar() {
    return (
       <div className="recipe-left">
           <div className="recipe-left-primary">Popularne przepisy</div>
           <div className="recipe-left-items">
                <MainRecipeSidbarItem src="img/przepis-1.jpg" text="Lorem ipsum" path="/" title="kawa" />
                <MainRecipeSidbarItem src="img/przepis-5.jpg" text="Lorem ipsum" path="/" title="kawa" />
                <MainRecipeSidbarItem src="img/przepis-8.jpg" text="Lorem ipsum" path="/" title="kawa" />
           </div>
       </div>
    )
}

export default MainRepiceSidebar

