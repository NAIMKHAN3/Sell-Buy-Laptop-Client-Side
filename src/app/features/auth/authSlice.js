import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import auth from "../../../Page/Share/Firebase.config"


const initialState = {
    user: {
        email: "",
        isLoading: false,
        isError: false,
    }
}

export const createUser = createAsyncThunk("auth/createuser", async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data.user.email;
});

export const loginUser = createAsyncThunk("auth/LoginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    return data.user.email;
});
export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    return data.user.email;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.user.email = "";
        },
        setUser: (state, { payload }) => {
            state.user.email = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state, action) => {
            state.user.isLoading = true;
            state.user.isError = false;
            state.user.email = "";
        })
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.user.isLoading = false;
                state.user.isError = false;
                state.user.email = payload;
            })
            .addCase(createUser.rejected, (state, action) => {
                state.user.isLoading = false;
                state.user.isError = true;
                state.user.email = action;
            });
        builder.addCase(loginUser.pending, (state, action) => {
            state.user.isLoading = true;
            state.user.isError = false;
            state.user.email = "";
        })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.user.isLoading = false;
                state.user.isError = false;
                state.user.email = payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user.isLoading = false;
                state.user.isError = true;
                state.user.email = action;
            });
        builder.addCase(googleLogin.pending, (state, action) => {
            state.user.isLoading = true;
            state.user.isError = false;
            state.user.email = "";
        })
            .addCase(googleLogin.fulfilled, (state, { payload }) => {
                state.user.isLoading = false;
                state.user.isError = false;
                state.user.email = payload;
            })
            .addCase(googleLogin.rejected, (state, action) => {
                state.user.isLoading = false;
                state.user.isError = true;
                state.user.email = action;
            });
    }
})

export const { logOut, setUser } = authSlice.actions;

export default authSlice.reducer;