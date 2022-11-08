import React from 'react'

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.statee = {}
    }

    submitHandler = event => {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Заголовок поста</label>
                    <input type="text" className="form-control" id="title"/>
                </div>
                <button className="btn btn-success mt-3" type={"submit"}>Создать</button>
            </form>
        )
    }
}