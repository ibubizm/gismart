import './pagination.css'


export const Pagination = ({ itemsPerPage, totalItems, setCurrentPage, currentPage }) => {
    const pages = []

    const active = (p) => {
        setCurrentPage(p)
    }

    const perv = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const next = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    for (let i = 0; i < Math.ceil(totalItems / itemsPerPage); i++) {
        pages.push(i)
    }
    return (
        <div className="pagination">
            {pages.length > 1 &&
                <ul className="pages">
                    <li className="prev__next" onClick={() => perv()} >previous</li>
                    {pages.map(p =>
                        <li key={p} onClick={() => active(p)} className={currentPage === p ? 'page__num active' : 'page__num'}>{p + 1}</li>
                    )}
                    <li className="prev__next" onClick={() => next()}>next</li>
                </ul>
            }

        </div>
    )
}