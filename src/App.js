
import './App.css';
import { Form } from './components/form/form'
import { useEffect, useState } from 'react';
import { List } from './components/list/list';
import { Pagination } from './components/pagination/pagination';

function App() {
  const [listData, setListData] = useState([])
  const [visible, setVisible] = useState(false)

  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(50)
  const [totalItems, setTotalItems] = useState(0)

  const getData = async (page) => {
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=${itemsPerPage}`, {
      method: 'GET',
      headers: {
        'app-id': '6154537832884b1a024b2f3c',
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    setTotalItems(data.total)
    setListData(data.data)
  }


  useEffect(() => {
    getData(currentPage)
  }, [currentPage, totalItems])

  return (
    <div className="App">
      {listData &&
        <List list={listData} />
      }
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage} />
      {visible ?
        <Form visible={setVisible} />
        :
        <button onClick={() => setVisible(true)}>create user</button>
      }
    </div>
  );
}

export default App;
