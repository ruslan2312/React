let store = {
    _state: {

        DialogsPage: {
            dialogsDatat: [
                { id: 1, name: "Frist", img: "https://sun9-27.userapi.com/impg/GTKlQP2R7A1tvD4Yc1u3iSnLmt3wRDsGZNE29w/zHYUa5TcGmQ.jpg?size=1620x2160&quality=96&sign=61a66a58a6035084f96620a534e48021&type=album" },
                { id: 2, name: "Two", img: "https://sun9-27.userapi.com/impg/GTKlQP2R7A1tvD4Yc1u3iSnLmt3wRDsGZNE29w/zHYUa5TcGmQ.jpg?size=1620x2160&quality=96&sign=61a66a58a6035084f96620a534e48021&type=album" },
                { id: 3, name: "Three", img: "https://sun9-27.userapi.com/impg/GTKlQP2R7A1tvD4Yc1u3iSnLmt3wRDsGZNE29w/zHYUa5TcGmQ.jpg?size=1620x2160&quality=96&sign=61a66a58a6035084f96620a534e48021&type=album" },
            ],
            messageData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Adely" },
                { id: 3, message: "How you" },
            ]
        },
        PostPage: {
            postData: [
                { id: 1, message: "Hi message 1", like: "3" },
                { id: 2, message: "Hi message 2", like: "2" }
            ],
            postUnMessage: ''

        },
    },
    getState() {
        return this._state;
    },

    renderThree() {
    },

    subscribe(observer) {
        this.renderThree = observer;
    },

    dispatch(action) {
        if (action.type === 'UPDATE-NEW-POST') {
            this._state.PostPage.postUnMessage = action.newText;
            this.renderThree(this._state);
        }   
        else if (action.type === 'ADD-POST-STATE') {
            let newPost = {
                id: 1,
                message: this._state.PostPage.postUnMessage,
                like: 0
            }
            this._state.PostPage.postData.push(newPost);
            this._state.PostPage.postUnMessage = "";
            this.renderThree(this._state);
        }
    }

}





export default store;