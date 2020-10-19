import getList from './getList()';

export default function docs() {
    return (
        <div className='app-doctor'>
            <div className='head-doctor'>  
                                
                <a href="/"><img className="back-button" src="img/arrow.svg"/></a>
                    <div className="search-container">
                        <div className="search">
                            <input className="input-search" placeholder="Поиск по докторам"></input> 
                        </div>
                        <img src="img/search.svg"/>  
                    </div>
            </div>
            <div className="app">
                {getList()}
            </div>
        </div>
       
    )
}


