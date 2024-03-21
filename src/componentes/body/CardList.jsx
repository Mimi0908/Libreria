import React from 'react'
import Cards from './Cards'
import data from './data'


function CardList() {
    const cards = data.map(items => {
        return(
            <Cards key={items.id} items={items}/>
        )
    })
    return (
        <div className='body'>
            <div className='divCards'>
            {cards}
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link disabled" href="#">Prev</a></li>
                    <li class="page-item"><a class="page-link active" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default CardList