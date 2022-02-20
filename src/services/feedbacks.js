const defaultPagination = {
  limit: 5,
  offset: 0
}
export default httpClient => ({
  getAll: async ({ type, limit, offset } = defaultPagination) => {
    const query = { limit, offset }
    if (type) {
      query.type = type
    }
    const respose = await httpClient.get('/feedbacks', { params: query })

    return { data: respose.data }
  },
  getSummary: async () => {
    const respose = await httpClient.get('/feedbacks/summary')
    return { data: respose.data }
  }
})
