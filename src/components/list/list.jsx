import './list.css'
import empty from './images.png'


export const List = ({ list }) => {
    return (
        <div className="container">
            <ul className="user__list">
                {list &&
                    list.map(item =>
                        <li key={item.id} className="user__item">
                            <div className="item">
                                <div className="picture">
                                    {item.picture ?
                                        <img style={{ width: 90 }} src={item.picture} alt="" />
                                        :
                                        <img style={{ width: 90 }} src={empty} alt="" />
                                    }
                                </div>
                                <div className="name__block">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="firstName">
                                        {item.firstName}
                                    </div>
                                    <div className="lastName">
                                        {item.lastName}
                                    </div>
                                </div>

                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}