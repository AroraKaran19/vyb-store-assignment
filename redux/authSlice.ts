import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string;
  password: string;
  username: string;
  userData: { email: string; username: string } | null;
  isLogin: boolean;
}

const initialState: AuthState = {
  email: '',
  password: '',
  username: '',
  userData: null,
  isLogin: true,  // Switch between Login/Signup mode
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setUserData: (state, action: PayloadAction<AuthState['userData']>) => {
      state.userData = action.payload;
    },
    toggleAuthMode: (state) => {
      state.isLogin = !state.isLogin;
      state.email = '';
      state.password = '';
      state.username = '';
    },
  },
});

export const { setEmail, setPassword, setUsername, setUserData, toggleAuthMode } = authSlice.actions;
export default authSlice.reducer;
