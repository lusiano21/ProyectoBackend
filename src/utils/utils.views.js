class CommunsUtil {
    static buidResponse(data) {
    let link = "http://localhost:8080/"
      let sortQueryParam = ''
      if (data.sort) {
        sortQueryParam = `&sort=${data.sort}`
      }
      return {
        status:'success',
        payload: data.docs,
        totalPages: data.totalPages,
        prevPage: data.prevPage,
        nextPage: data.nextPage,
        page: data.page,
        hasPrevPage: data.hasPrevPage,
        hasNextPage: data.hasNextPage,
        prevLink: !data.hasPrevPage ? null : `${link}api?limit=${data.limit}&page=${data.prevPage}${sortQueryParam}`,
        nextLink: !data.hasNextPage ? null : `${link}api?limit=${data.limit}&page=${data.nextPage}${sortQueryParam}`,
        sort: data.sort,
        sortLink: `http://localhost:8080/api?page=${data.page}&limit=${data.limit}&sort=${data.sort === 'asc' ? 'desc' : 'asc'}`
      }
    }
  }
  
  export default CommunsUtil