import axios   from 'axios'

const API_KEY = 'AIzaSyDYi7JBDfmxMf0XXcfffG1Y7_K5gtGrT1I';

export class FirebaseService {
   static async login(email: string, password: string): Promise<any> {
      const authData = {
         email, password,
         returnSecureToken: true
      }
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, authData)

      return response.data
   }

   static async register(email: string, password: string): Promise<any> {
      const authData = {
         email, password,
         returnSecureToken: true
      }

      const response =  await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, authData)


      return response.data
   }
}
