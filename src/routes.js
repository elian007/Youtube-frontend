import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Listagem from './pages/Listagem'
import Upload from './pages/Upload'
import Pesquisar from './pages/Pesquisar'

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Listagem} />
            <Route path='/upload' component={Upload} />
            <Route path='/pesquisa' component={Pesquisar} />
        </Switch>
    )
}

export default Routes