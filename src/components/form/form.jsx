import { useEffect, useState } from "react"
import { createData } from "../../actions/actions"
import './form.css'
import close from './close.png'

const titles = ['none', 'ms', 'miss', 'dr', 'mr', 'mrs']

export const Form = ({ visible }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('none')
    const [picture, setPicture] = useState('')

    const [firstNameDirty, setFirstNameDirty] = useState(false)
    const [lastNameDirty, setLastNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)

    const [firstNameError, setFirstNameError] = useState('name can not be empty')
    const [lastNameError, setLastNameError] = useState('last name can not be empty')
    const [emailError, setEmailError] = useState('email can not be empty')


    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (firstNameError || lastNameError || emailError) {
            setFormValid(false)
        }
        else {
            setFormValid(true)
        }
    })

    const blureHandler = (e) => {
        switch (e.target.name) {
            case 'firstName':
                setFirstNameDirty(true)
                break
            case 'lastName':
                setLastNameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('invalid email')
        }
        else {
            setEmailError('')
        }
    }

    const nameHandler = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2) {
            setFirstNameError('first name is shorter than the minimum allowed length')
        }
        else {
            setFirstNameError('')
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2) {
            setLastNameError('last name is shorter than the minimum allowed length')
        }
        else {
            setLastNameError('')
        }
    }

    const titleHandler = (e) => {
        if (e.target.value === '') {
            setTitle('')
        }
        else {
            setTitle(e.target.value)
        }
    }


    const send = () => {
        if (title === 'none') {
            const obj = {
                firstName,
                lastName,
                picture,
                email,
            }
            createData(obj)
                .then(data => console.log(data))
        }
        else {
            const obj = {
                title,
                firstName,
                lastName,
                picture,
                email,
            }
            createData(obj)
                .then(data => console.log(data))
        }
        visible(false)
    }

    return (

        <div className="form">
            <div className="header">
                <h2 className="title">
                    create user
                </h2>
                <div onClick={() => visible(false)} className="close">
                    <img src={close} alt="close" />
                </div>
            </div>
            <input
                onBlur={blureHandler}
                name="firstName"
                value={firstName}
                onChange={(e) => nameHandler(e)}
                type="text"
                placeholder="first name" />
            {(firstNameDirty && firstNameError) && <div style={{ color: 'red' }}>{firstNameError}</div>}

            <input
                onBlur={blureHandler}
                name="lastName"
                value={lastName}
                onChange={(e) => lastNameHandler(e)}
                type="text"
                placeholder="last name" />
            {(lastNameDirty && lastNameError) && <div style={{ color: 'red' }}>{lastNameError}</div>}

            <input
                onBlur={blureHandler}
                name="email"
                value={email}
                onChange={emailHandler}
                type="email"
                placeholder="email" />
            {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}

            <input
                onChange={(e) => setPicture(e.target.value)}
                type="text"
                value={picture}
                placeholder="img url" />

            <select style={{ display: 'flex', padding: 5 }} onChange={titleHandler}>
                {titles.map(t =>
                    <option key={t} value={t}>{t}</option>
                )}
            </select>
            <div className="buttons">
                <button className="btn" disabled={!formValid} onClick={send}>submit</button>
            </div>
        </div>
    )
}