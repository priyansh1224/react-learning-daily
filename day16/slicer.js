// create  Asyncthunk 
// {type"coin/fetch",payload:}
import{createAsyncThunk} from '@reduxjs/toolkit'


const FetchData=createAsyncThunk(
    //Action  type:payload
    'coin/fetch',

    async{args,thu}

)