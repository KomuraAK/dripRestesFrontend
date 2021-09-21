import React from 'react'
import * as rRouters from "react-router-dom";
import Bottom from './pages/Bottom';
import Top from './pages/Top';
import Shoes from './pages/Shoes';
import ShopAll from './pages/ShopAll';
import Home from './Home';
import Header from './Header';
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';

const Pages = _ => {
    return (
        <div>
            <rRouters.Switch >
                <rRouters exact path='/'>
                    <Home />
                </rRouters>
                {/* paginas */}
                <rRouters.Route path='/Bottom'>
                    <Bottom />
                </rRouters.Route>

                <rRouters.Route path='/Top'>
                    <Top />
                </rRouters.Route>
                
                <rRouters.Route path='/Shoes'>
                    <Shoes />
                </rRouters.Route>

                <rRouters.Route path='/ShopAll'>
                    <ShopAll />
                </rRouters.Route>

                <rRouters.Route path='/Header'>
                    <Header />
                </rRouters.Route>
                
                <rRouters.Route path='/Login'>
                    <FormLogin />
                </rRouters.Route>
                
                <rRouters.Route path='/Cadastro'>
                    <FormCadastro />
                </rRouters.Route>
            </rRouters.Switch>
        </div>
    )
}

export default Pages
