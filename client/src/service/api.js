import axios from "axios";

const url = "http://localhost:8000";

export const saveSentMail = async(data) => {

    try {
        return await axios.post(`${url}/save-sent`,data)
    } catch (error) {
        console.log(`Error in saveSentMailApi ${error}`);
    }
}

export const saveDraftMail = async(data) => {
    try {
        return await axios.post(`${url}/save-draft`,data);
    } catch (error) {
        console.log(`Error in saveDraftMailApi ${error}`);
    }
}

export const getMails = async() => {
  try {
      return await axios.get(`${url}/get-mails`);
  } catch (error) {
        console.log(`Error in getMailsApi ${error}`);
  }
}

export const getDraftMails = async() => {
    try {
        return await axios.get(`${url}/get-drafts`);
    } catch (error) {
            console.log(`Error in getDraftsMailsApi ${error}`);
    }   
}

export const toggleStarred = async(data) => {
    try {
        return await axios.put(`${url}/toggle-star`,data);
    } catch (error) {
        console.log(`Error in toggleStarred api ${error}`);
    }
}
 
export const getStarredMail = async() => {
   try {
     return await axios.get(`${url}/get-starmail`);
   } catch (error) {
        console.log(`Error in getStarredMail Api ${error}`);
   }
}

export const moveMailToBin = async(data) => {
try {
      return await axios.put(`${url}/move-bin`,data);
} catch (error) {
        console.log(`Error in moveMailToBin Api ${error}`);
}
}

export const getBinMail = async() => {

try {
    return await axios.get(`${url}/get-bin`);
    
} catch (error) {
    console.log(`Error in getBinMail Api ${error}`);
}}

export const deleteMail = async(data) => {
    try {

        return await axios.delete(`${url}/delete-mail`, { data  } )
    } catch (error) {
        console.log(`Error in deleteMail Api ${error}`);
    }   
}