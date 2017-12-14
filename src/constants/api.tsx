
export module constants {
  export class API {
    getApiConstants(): any {
      return {
        'base': 'http://localhost',
        'port': 3500,
        'API': {
          'GETACCOUNTS': 'getAccounts',
          'GETTRADES': 'trades'
        }
      }
    }
  }
}
