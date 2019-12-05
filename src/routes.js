import React from 'react'
import { Switch, Route} from 'react-router-dom'

import Listagem from './pages/Listagem'
import Upload from './pages/Upload'
import Pesquisar from './pages/Pesquisar'
import Playlist from './pages/Playlist'

function Routes(){
    return(
        <Switch>
            <Route path='/' exact component={Listagem} />
            <Route path='/upload' component={Upload} />
            <Route path='/videos/:value' component={Pesquisar} />
            <Route path='/playlist' component={Playlist} />
        </Switch>
    )
}

export default Routes