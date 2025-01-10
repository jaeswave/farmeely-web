import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { usePatch, usePost , useGet} from '../../hooks'
import Urls from '../../services/urls/index.js'

export const createCustomerAccount = createAsyncThunk('createCustomerAccount', async (data) => {
    try{
        const response = await usePost(Urls.userSignUp, data)
        return response.data
    }catch(error){
        const errorMessage = error.response ? error.response.data?.message || error.message : "Network error. Please try again later."
        return errorMessage
    }
})

export const verifyCustomerEmail = createAsyncThunk('verifyCustomerEmail', async ({email, otp}) => {
    try{
        const response = await usePatch(`${Urls.verifyEmail}/${email}/${otp}`)
        return response.data
    }catch(error){
        const errorMessage = error.response ? error.response.data?.message || error.message : "Network error. Please try again later."
        return errorMessage
    }
})

export const loginDa = createAsyncThunk('login', async (data) => {
    try{
        const response = await usePost(Urls.login, data)
        return response
    }catch(error){
        const errorMessage = error.response ? error.response.data?.message || error.message : "Network error. Please try again later."
        return errorMessage
    }
})

export const getCustomerData = createAsyncThunk('getCustomerData', async () => {
    try{
        const token = sessionStorage.getItem('token')
        console.log("url: ", Urls.userDetails)
        const response = await useGet(Urls.userDetails, token)
        return response.data
    }catch(error){
        const errorMessage = error.response ? error.response.data?.message || error.message : "Network error. Please try again later."
        return errorMessage
    }
})




const customerSlice = createSlice({
  name: 'customer',
  initialState:  {
    customer: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    // login: (state, action) => {
    //   state.customer = action.payload
    // },
    // createAccount: (state, action) => {
    //   state.customer = action.payload
    // },
    // verifyEmail: (state, action) => {
    //   state.customer = action.payload
    // }
  },
  extraReducers: (builder) => {

    builder.addCase(createCustomerAccount.pending, (state) => {
        state.isLoading = true;
      })
    builder.addCase(createCustomerAccount.fulfilled, (state) => {
        state.isLoading = false;
       
    })
    builder.addCase(createCustomerAccount.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
    })

    builder.addCase(verifyCustomerEmail.pending, (state) => {
        state.isLoading = true;
    })
    builder.addCase(verifyCustomerEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.response = action.payload

    })
    builder.addCase(verifyCustomerEmail.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
    })

    builder.addCase(loginDa.pending, (state) => {
        state.isLoading = true;
    })
    builder.addCase(loginDa.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customer = action.payload

    })
    builder.addCase(loginDa.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
    })

    builder.addCase(getCustomerData.pending, (state) => {
        state.isLoading = true;
    })
    builder.addCase(getCustomerData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customer = action.payload

    })
    builder.addCase(getCustomerData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
    })

}
})

// export const { createAccount } = customerSlice.actions
export default customerSlice.reducer