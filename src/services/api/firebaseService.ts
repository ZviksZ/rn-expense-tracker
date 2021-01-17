import axios                       from 'axios'
import {ExpenseAddUpdateInterface} from "./types";

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

      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, authData)


      return response.data
   }

   static async refreshToken(refreshToken: string) {
      const tokenData = {
         refresh_token: refreshToken,
         grant_type: "refresh_token"
      }
      const response = await axios.post(`https://securetoken.googleapis.com/v1/token?key=${API_KEY}`, tokenData)


      return response.data
   }

   static async fetchExpenses(userId: string) {
      const response = await axios.get(`https://rn-expense-tracker-default-rtdb.firebaseio.com/expenses.json?orderBy="userId"&equalTo="${userId}"&print=pretty`)

      return response.data
   }

   static async addExpense(data: ExpenseAddUpdateInterface) {
      const response = await axios.post(`https://rn-expense-tracker-default-rtdb.firebaseio.com/expenses.json`, data)

      return response.data
   }

   static async removeExpense(id: string) {
      const response = await axios.delete(`https://rn-expense-tracker-default-rtdb.firebaseio.com/expenses/${id}.json`)

      return response.data
   }

   static async updateExpense(id: string) {
      const response = await axios.patch(`https://rn-expense-tracker-default-rtdb.firebaseio.com/expenses/${id}.json`)

      return response.data
   }
}
