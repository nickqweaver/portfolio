import * as Apollo from "@apollo/client"

export const validateResponseType = <T>(response: any): response is T => {
  const res = response as Apollo.QueryResult

  if (res.data) {
    return true
  }
  return false
}
