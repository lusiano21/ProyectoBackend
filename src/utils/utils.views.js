class CommunsUtil {
    static buidResponse(data) {
    let link = "https://proyectobackend-production-1746.up.railway.app/"
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
        sortLink: `https://proyectobackend-production-1746.up.railway.app/api?page=${data.page}&limit=${data.limit}&sort=${data.sort === 'asc' ? 'desc' : 'asc'}`
      }
    }
  }
  
  export default CommunsUtil