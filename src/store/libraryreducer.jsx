import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("login"));
const books = JSON.parse(localStorage.getItem("books"));

export const librarySlice = createSlice({
    name: "library",
    initialState: {
        user: user,
        books:books || [],
        shelves: [],
        auther: [],
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("login", JSON.stringify(action.payload));
        },
        logOut: (state) => {
            state.user = null;
        },
        addBooks: (state, action) => {
            const booksDT = {
                ...action.payload,
                id: Math.floor(Math.random() * 1000),
            };
            state.books.push(booksDT);
            localStorage.setItem("books", JSON.stringify(state.books));
        },
        updateBooks: (state, action) => {
            const bookDetail = action.payload;
            console.log("update", bookDetail);
            state.books = state.books.map((bok) =>
                bok.id === bookDetail.id ? bookDetail : bok
            );

            localStorage.setItem("books", JSON.stringify(state.books));
    
        },
        
        deleteBook: (state, action) => {
            const bookIdToDelete = action.payload;
            state.books = state.books.filter((book) => book.id !== bookIdToDelete);
            localStorage.setItem("books", JSON.stringify(state.books));
        },
    },
});

export const { loginUser, logOut, addBooks, updateBooks ,deleteBook} = librarySlice.actions;
export default librarySlice.reducer;
