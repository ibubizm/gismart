
const header = {
    'app-id': '6154537832884b1a024b2f3c',
    'Content-Type': 'application/json'
}


export const createData = async (data) => {
    try {
        await fetch('https://dummyapi.io/data/v1/user/create', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                title: data.title,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                picture: data.picture
            })
        })

            .then((response) => {
                if (response.ok) {
                    alert('user created')
                    return response.json()
                }
                else {
                    return response.json()
                        .then((err) => {
                            const errorName = Object.keys(err.data)
                            alert(err.data[errorName])
                        })
                }
            })

    } catch (e) {
        alert(e)
        console.log(e)
    }

}